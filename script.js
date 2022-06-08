const carrinhoPai = document.getElementsByClassName('cart__items');

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
  // coloque seu código aqui
};

const createCartItemElement = (obj) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${obj.sku} | NAME: ${obj.name} | PRICE: $${obj.salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const testeAdd = async (idx) => {
  let itemClicado = await fetchComputador()[idx];
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

const addDireto = (dadosSelecionado) => {
  carrinhoPai[0].appendChild(createCartItemElement(dadosSelecionado));
};

const addCartItem = () => {
  const addItens = document.querySelectorAll('. item__add');
  console.log(addItens);
  console.log(addItens[0]);
  /* addItens.forEach((element, idx) => {
    // const dadosSelecionado = testeAdd(idx);
    element.addEventListener('click', function clickOi() {
      console.log('oi');
    });
  }); */
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

window.onload = () => {
  fetchComputador();
  separaDados();
  adicionaItem();
  addCartItem();
 };