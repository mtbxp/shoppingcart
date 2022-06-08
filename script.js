const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const emptyCartButton = document.querySelector('.empty-cart');
const totalPriceLint = '.total-price';
let totalPrice = 0;

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const element = event.target.innerText;
  const price = element.slice(element.indexOf('$') + 1);
  totalPrice -= price;
  const priceDiv = document.querySelector(totalPriceLint);
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
  priceDiv.innerText = Math.round(totalPrice * 100) / 100;
  return priceDiv;
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const createElementPrice = (priceSaved) => {
  const div = document.createElement('div');
  div.className = 'total-price';
  if (priceSaved > 0) {
    div.innerHTML = priceSaved;
  }
  emptyCartButton.parentNode.insertBefore(div, emptyCartButton);
};

const calculatorTotalPrice = (price) => {
  const priceDiv = document.querySelector(totalPriceLint);
  totalPrice += price;
  priceDiv.innerText = Math.round(totalPrice * 100) / 100;
  return priceDiv;
};

const saveCartSum = (price) => {
  localStorage.setItem('totalCartPrice', price);
};

const updatePrice = (e) => {
  cartItemClickListener(e);
  saveCartSum(Math.round(totalPrice * 100) / 100);
};

const getSavedPrice = () => {
  const savedPrice = localStorage.getItem('totalCartPrice');
  totalPrice = Math.round(savedPrice * 100) / 100;
  return totalPrice;
};

const emptyCart = () => {
  cartItems.innerHTML = '';
  totalPrice = 0;
  saveCartItems(cartItems.innerHTML);
  saveCartSum(totalPrice);
  document.querySelector(totalPriceLint).innerHTML = '';
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('item__add')) {
    fetchItem(getSkuFromProductItem(e.target.parentNode))
      .then((item) => {
        calculatorTotalPrice(item.price);
        cartItems.appendChild(createCartItemElement(item));
        saveCartItems(cartItems.innerHTML);
        saveCartSum(totalPrice);
      });
  }
  if (e.target.classList.contains('cart__item')) return updatePrice(e);
  if (e.target.classList.contains('empty-cart')) return emptyCart();
});

const loadingTime = () => {
  const div = document.createElement('span');
  div.className = 'loading';
  div.innerHTML = 'carregando...';

  document.querySelector('.items').appendChild(div);
};

const deleteLoading = () => document.querySelector('.loading').remove();

const finalizingCart = async () => {
  createElementPrice(getSavedPrice());
  cartItems.innerHTML = getSavedCartItems();
  loadingTime();
  const data = await fetchProducts('computador');
  deleteLoading();
  data.results.forEach((element) =>
    items.appendChild(createProductItemElement(element)));
  };

window.onload = () => {
  finalizingCart();
};
