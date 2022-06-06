const itemSection = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const cart = document.querySelector('.cart');
const clearButton = document.querySelector('.empty-cart');
const classPrice = '.total-price';

const createTotalCostElement = () => {
  if (!document.querySelector(classPrice)) {
    const sectionPrice = document.createElement('section');
    sectionPrice.className = 'total-price';
    cart.appendChild(sectionPrice);
    return sectionPrice;  
  }
  return document.querySelector(classPrice);
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

const pricesFixed = (str) => {
  const toString = str.toString();
  if (toString.indexOf('.') > 0) {
    const priceFixed = parseFloat(toString.slice(0, (toString.indexOf('.')) + 3));
    return parseFloat(priceFixed);
  }
  return str;
};

const subPrices = (str) => {
  const priceSec = document.querySelector(classPrice);
  const indexToNumbers = str.indexOf('$');
  const getNumbers = parseFloat(str.slice(indexToNumbers + 1));
  const prices = localStorage.getItem('totalPrice');
  let newPrice = prices - getNumbers;
  if (newPrice < 10) newPrice = 0;
  localStorage.setItem('totalPrice', newPrice);
  priceSec.innerText = pricesFixed(newPrice);
};

const cartItemClickListener = (e) => {
  e.target.remove();
  subPrices(e.target.innerHTML);
};

const reloadCartItemListener = () => {
  cartItems.addEventListener('click', cartItemClickListener);
  cartItems.innerHTML = getSavedCartItems();
  const reloadPrices = localStorage.getItem('totalPrice');
  if (reloadPrices) {
    createTotalCostElement().innerHTML = pricesFixed(reloadPrices);
  }
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const showTotalCost = (price) => {
  const showPrices = document.querySelector(classPrice);
  let prices = 0; 
  price.forEach((el) => {
    prices += el;
  });
  showPrices.innerText = pricesFixed(prices);
  localStorage.setItem('totalPrice', prices);
};

const pricesArr = [];
const buttonItemClickListener = async (e) => {
  const itemID = e.target.parentNode.firstChild.innerText;
  const item = await fetchItem(itemID);
  cartItems.appendChild(createCartItemElement(item));
  if (localStorage.getItem('totalPrice')) {
    pricesArr.splice(0, pricesArr.length);
    pricesArr.push(parseFloat(localStorage.getItem('totalPrice')));
  } 
  pricesArr.push(await item.price);
  
  createTotalCostElement();
  showTotalCost(pricesArr);
  saveCartItems(cartItems.innerHTML);
};

const createProductItemElement = (sku, name, image) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', buttonItemClickListener);

  return section;
};

const showItems = async () => {
  const productsInfo = await fetchProducts('computador');
  await productsInfo.forEach(({ id, title, thumbnail }) =>
    itemSection.appendChild(createProductItemElement(id, title, thumbnail)));
};

const clearCartButton = () => {
  clearButton.addEventListener('click', () => {
    cartItems.innerHTML = '';
    localStorage.setItem('cartItems', '');
    localStorage.setItem('totalPrice', 0);
    document.querySelector(classPrice).innerText = 0;
  });
};
// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => { 
  showItems();
  clearCartButton();
  reloadCartItemListener();
};
