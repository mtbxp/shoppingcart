const cartList = document.querySelector('.cart__items');
const listaDeItens = document.querySelector('.items');
const totalP = document.createElement('span');
let total = 0;
const btn = document.querySelector('.empty-cart');
const cart = document.querySelector('.cart');

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

const totalPrices = () => {
  totalP.className = 'total-price';
  totalP.innerText = total;
  cart.appendChild(totalP);
};

const sumPrices = (price) => {
  total += parseFloat(price);
  totalPrices();
  return total;
};

const nunPrice = (event) => {
  const splitT = event.target.innerText.split('$');
  total -= parseFloat(splitT[1]);
  totalPrices();
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();  
  saveCartItems(cartList.innerHTML);
  nunPrice(event);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const EventOnItem = (event) => {
  const sku = getSkuFromProductItem(event.target.parentNode);
  fetchItem(sku).then((item) => {
    sumPrices(item.price);
    cartList.appendChild(createCartItemElement(item));
    saveCartItems(cartList.innerHTML);
  });
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', EventOnItem);

  return section;
};

const createProductList = async () => {
  const fetch = await fetchProducts('computador');
  const fetchProduct = fetch.results;
  fetchProduct.forEach((element) => {
    const item = createProductItemElement(element);
    listaDeItens.appendChild(item);
  });
};

const removeItens = () => {
  cartList.innerText = '';
  total = 0;
  totalPrices();
};
btn.addEventListener('click', removeItens);

const requisição = () => {
  const olHtml = document.querySelector('.cart__items');
  olHtml.innerHTML = getSavedCartItems();
  olHtml.addEventListener('click', cartItemClickListener);
};

  window.onload = () => { 
  createProductList();
  requisição();
};
