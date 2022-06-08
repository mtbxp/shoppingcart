const carrinhoPai = document.getElementsByClassName('cart__items');
let carrinho = [];

const fetchComputador = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const fProduto = await fetch(url);
  const data = await fProduto.json();
  return data.results;
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = (objeto) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', objeto.sku));
  section.appendChild(createCustomElement('span', 'item__title', objeto.name));
  section.appendChild(createProductImageElement(objeto.image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.parentNode.removeChild(event.target);
};

const createCartItemElement = (obj) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${obj.sku} | NAME: ${obj.name} | PRICE: $${obj.salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  li.addEventListener('click', function removeLocal() {
    carrinho = JSON.parse(localStorage.getItem('cartItems'));
    const indx = carrinho.findIndex((element) => element.sku === obj.sku);
    carrinho.splice(indx, 1);
    localStorage.setItem('cartItems', JSON.stringify(carrinho));
  });
  return li;
};

const itensParaAdd = async () => {
  let itemClicado = await fetchComputador();
  itemClicado = itemClicado.map((element) => {
    const idComputador = element.id;
    const titleComputador = element.title;
    const priceComputador = element.price;
    return {
      sku: idComputador,
      name: titleComputador,
      salePrice: priceComputador,
    };
  });
  return itemClicado;
};

const addCartItem = async () => {
  const addItens = document.querySelectorAll('.item__add');
  const dadosSelecionado = await itensParaAdd();
  addItens.forEach((element, idx) => {
    element.addEventListener('click', function addDireto() {
      carrinhoPai[0].appendChild(createCartItemElement(dadosSelecionado[idx]));
      carrinho.push(dadosSelecionado[idx]);
      localStorage.setItem('cartItems', JSON.stringify(carrinho));
    });
  });
};

const separaDados = async () => {
  const todosDados = await fetchComputador();
  const dadosParaItem = todosDados.map((element) => {
    const idComputador = element.id;
    const titleComputador = element.title;
    const thumbnailComputador = element.thumbnail;
    return {
      sku: idComputador,
      name: titleComputador,
      image: thumbnailComputador,
    };
  });
  return dadosParaItem;
};

const adicionaItem = async () => {
  const sectionPai = document.getElementsByClassName('items');
  const dadosParaItem = await separaDados();
  dadosParaItem.forEach((element) => {
    const sectionFilho = createProductItemElement(element);
    sectionPai[0].appendChild(sectionFilho);
  }); 
};

const testeLocal = () => {
  carrinho = JSON.parse(localStorage.getItem('cartItems'));
  if (carrinho !== null && carrinho.length > 0) {
    carrinho.forEach((element) => carrinhoPai[0].appendChild(createCartItemElement(element)));
  }
  carrinho = [];
};

window.onload = async () => {
  await fetchComputador();
  await separaDados();
  await itensParaAdd();
  await adicionaItem();
  await testeLocal();
  addCartItem();
 };