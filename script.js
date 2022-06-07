// const { fetchProducts } = require("./helpers/fetchProducts");

const productsList = document.querySelector('.items');
const cartList = document.querySelector('.cart__items');
const priceTag = document.querySelector('.total-price');
const clearButton = document.querySelector('.empty-cart');

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

const calculatePrice = () => {
  const prices = cartList.innerText.split('\n');
  if (!prices[0]) {
    priceTag.innerText = '0.00';
  } else {
   priceTag.innerText = prices.reduce((acc, item) => acc + Number(item.split('$')[1]), 0);
  }
};

const cartItemClickListener = (event) => {
  event.target.remove();
  calculatePrice();
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
    saveCartItems(cartList.innerHTML);
    calculatePrice();
  });
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  fetchProducts();
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', addItemToCart);
  return section;
};

const createProductList = async () => {
  const loadMessage = document.createElement('p');
  loadMessage.className = 'loading';
  loadMessage.innerText = 'carregando...';
  productsList.appendChild(loadMessage);
  const productsData = await fetchProducts('computador').then((list) => list.results);
  productsList.firstChild.remove();
  await productsData.forEach((product) => {
      productsList.appendChild(createProductItemElement(product));
    });
};

clearButton.addEventListener('click', () => {
  cartList.innerHTML = '';
  saveCartItems(cartList.innerHTML);
  calculatePrice();
});

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const recoverData = () => {
  cartList.innerHTML = getSavedCartItems();
  cartList.addEventListener('click', cartItemClickListener);
};

window.onload = () => { 
  createProductList();
  recoverData();
  calculatePrice();
};
