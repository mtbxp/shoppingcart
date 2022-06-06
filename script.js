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

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
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
 };