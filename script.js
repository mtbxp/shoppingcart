// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

const { list } = require("mocha/lib/reporters/base");
const { create } = require("mochawesome-report-generator");
const { fetchItem } = require("./helpers/fetchItem");
const { fetchProducts } = require("./helpers/fetchProducts");

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

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

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
const buttonsToAdd = document.querySelectorAll('item__add');
buttonsremoveItem.addEventListener('click', cartItemClickListener);

const listOfItems = document.querySelector('.cart__item')[0];

const calculatePrice = () => {
  const priceTag = document.querySelector('.total-price');
  const finalPrice = listOfItems.reduce((acc, item) => acc + item.innerText.split('$')[1], 0);
  priceTag.innerText = `RS: ${finalPrice}`;
};

const clearCart = () => {
  listOfItems.innerText = '';
};

const clearListButton = document.querySelector('.empty-cart');
clearListButton.addEventListener('click', clearCart);

listOfItems.addEventListener('change', calculatePrice);

window.onload = () => { createProductList(); };
