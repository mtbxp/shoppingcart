// const { fetchItem } = require("./helpers/fetchItem");

// const saveCartItems = require("./helpers/saveCartItems");

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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const olCartItems = document.querySelector('.cart__items');
  event.target.remove();
  saveCartItems(olCartItems.innerText);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sendToCart = async (event) => {
  const ElementId = event.target.parentNode.firstChild.innerText;
  const product = await fetchItem(ElementId);
  const InfoToCart = createCartItemElement(product);
  const olCartItems = document.querySelector('.cart__items');
  olCartItems.appendChild(InfoToCart);
  saveCartItems(olCartItems.innerText);
};

const fetchProductsToCreateProducts = async () => {
  const data = await fetchProducts('computador');
  data.results.forEach((curr) => {
    const sectionDad = document.querySelector('.items');
    sectionDad.addEventListener('click', sendToCart);
    sectionDad.appendChild(createProductItemElement(curr));
  });
};

function start() {
  fetchProductsToCreateProducts();
  getSavedCartItems();
  
}

window.onload = () => { start(); };
