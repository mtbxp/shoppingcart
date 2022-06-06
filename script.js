// const { fetchProducts } = require("./helpers/fetchProducts");

const productsList = document.querySelector('.items');
const cartList = document.querySelector('.cart__items');

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

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemToCart = (event) => {
  const productId = event.target.parentNode.firstChild.innerText;
  fetchItem(productId).then((product) => {
    cartList.appendChild(createCartItemElement(product));
  });
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  fetchProducts();
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')).addEventListener('click', addItemToCart);

  return section;
};

const createProductList = async () => {
  await fetchProducts('computador')
    .then((list) => list.results
    .forEach((product) => productsList.appendChild(createProductItemElement(product))));
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => { 
  createProductList();
};
