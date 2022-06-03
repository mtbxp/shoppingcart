// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

const { create } = require("mochawesome-report-generator");
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
  const listOfProducts = fetchProducts('computador');
  listOfProducts.forEach((product) => {
    const productObject = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    };
    createProductItemElement(productObject);
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

window.onload = () => { createProductList(); };
