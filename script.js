// const getSavedCartItems = require("./helpers/getSavedCartItems");
const valuePrice = () => {
  const cartList = document.querySelectorAll('cart__item');
  let total = 0.00;
  cartList.forEach((element) => {
    const classes = element.getAttribute('class');
    const arrClasses = classes.split(/\D+/);
    arrClasses.shift();
    const price = arrClasses.join('.');
    total += parseFloat(price);
  });
  const priceTxt = document.getElementsByClassName('total-price')[0];
  priceTxt.innerText = `${Math.round(total * 100) / 100}`;
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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const newSection = document.createElement('section');
  newSection.className = 'item';
  newSection.appendChild(createCustomElement('span', 'item__sku', sku));
  newSection.appendChild(createCustomElement('span', 'item__title', name));
  newSection.appendChild(createProductImageElement(image));
  newSection.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return newSection;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
event.target.remove();
const containerCart = document.getElementsByClassName('cart__items')[0];
saveCartItems(JSON.stringify(containerCart.innerHTML));
valuePrice();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.classList.add(`$${salePrice}`);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addCart = async (event) => {
  const containerCart = document.getElementsByClassName('cart__items')[0];
  const targetID = event.target.parentElement.firstChild.innerText;
  const targetInfo = await fetchItem(targetID);
  const newElement = createCartItemElement(targetInfo);
  containerCart.appendChild(newElement);
  saveCartItems(JSON.stringify(containerCart.innerHTML));
  valuePrice();
};

const loadingCart = () => {
  const containerCart = document.getElementsByClassName('cart__items')[0];
  containerCart.innerHTML = JSON.parse(getSavedCartItems());
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

window.onload = async () => {
  loadingCart();
  const containerItems = document.getElementsByClassName('items')[0];
  const objResult = await fetchProducts('computador');
  objResult.results.forEach(({ id, title, thumbnail }) => {
    containerItems.appendChild(createProductItemElement(id, title, thumbnail));
    });
  const arrBttn = document.querySelectorAll('.item__add');
  arrBttn.forEach((button) => {
    button.addEventListener('click', addCartItems);
  });
  const clearButton = document.getElementsByClassName('empty-cart')[0];
  clearButton.addEventListener('click', () => {
    const containerCart = document.getElementsByClassName('cart__items')[0];
    containerCart.innerHTML = '';
    saveCartItems(JSON.stringify(containerCart.innerHTML));
    valuePrice();
  });
  valuePrice();
};
