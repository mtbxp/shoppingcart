// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

// const { list } = require('mocha/lib/reporters/base');
// const { create } = require('mochawesome-report-generator');
const { fetchItem } = require('./helpers/fetchItem');
const { fetchProducts } = require('./helpers/fetchProducts');

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

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

//  Essa função foi craiada para receber a lista de produtos requerida e adicioná-la ao site (exibindo mensagem 'carregando' durante a requisição);
const createProductList = () => {
  const displayOfItems = document.querySelector('.items');
  const listOfProducts = fetchProducts('computador');
  listOfProducts.forEach((product) => {
    const productObject = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    };
    displayOfItems.appendChild(createProductItemElement(productObject));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.parentNode.removeChild(event);
};

const buttonRemoveItem = document.querySelectorAll('item__add');
buttonRemoveItem.addEventListener('click', cartItemClickListener);

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

//  Essa função foi criada para ser disparada ao clicar em 'Adicionar item'. Nesse momento, ela recuperará o id do item, fará uma nova requisição sobre aquele produto específico e o adicionará à lista de compras
const getItem = (event) => {
  const itemSearched = getSkuFromProductItem(event.target.parentNode);
  const itemInfo = fetchItem(itemSearched);
  const { id, title, price } = itemInfo;
  const itemObject = {
    sku: id,
    name: title,
    salePrice: price,
  };
  createCartItemElement(itemObject);
};

const buttonsAddItem = document.querySelectorAll('item__add');
buttonsAddItem.addEventListener('click', getItem);

const listOfItems = document.querySelector('.cart__item')[0];

// Essa função calculará o preço dos itens da lista e o atualizará
const calculatePrice = () => {
  const priceTag = document.querySelector('.total-price');
  const finalPrice = listOfItems.reduce((acc, item) => acc + item.innerText.split('$')[1], 0);
  priceTag.innerText = `RS: ${finalPrice}`;
};
listOfItems.addEventListener('change', calculatePrice);

// Essa função limpará o carrinho de compras
const clearCart = () => {
  listOfItems.innerText = '';
};

const clearListButton = document.querySelector('.empty-cart');
clearListButton.addEventListener('click', clearCart);

window.onload = () => { createProductList(); };
