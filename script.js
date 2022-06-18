// const { fetchProducts } = require('./helpers/fetchProducts');
// const { fetchItem } = require('./helpers/fetchItem');
// const saveCartItems = require('./helpers/saveCartItems');

const cartItems = document.getElementsByClassName('cart__items')[0];

const updateLocalStorage = () => saveCartItems(cartItems.innerHTML);

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
  const itemToBeRemoved = event.target;
  cartItems.removeChild(itemToBeRemoved);
  updateLocalStorage();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addToCart = async ({ target }) => {
  const itemToBeFetched = target.parentNode.firstChild.innerText;
  const itemToBeAdded = await fetchItem(itemToBeFetched);
  cartItems.appendChild(createCartItemElement(itemToBeAdded));
  updateLocalStorage();
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = section.lastChild;
  button.addEventListener('click', addToCart);

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const addClickEventToLoadedCartItems = () => {
  const loadedCartItems = document.querySelectorAll('.cart__item');
  if (loadedCartItems) {
    loadedCartItems.forEach((element) => {
      element.addEventListener('click', cartItemClickListener);
    });
  }
};

const itemsSection = document.getElementsByClassName('items')[0];

const allowClearCart = () => {
  const clearCartButton = document.querySelector('.empty-cart');
  const clearCartItems = () => {
    cartItems.innerHTML = '';
  };
  clearCartButton.addEventListener('click', clearCartItems);
  updateLocalStorage();
};

window.onload = () => {
  fetchProducts('computador')
    .then((data) => {
      data.results.forEach((element) => itemsSection
      .appendChild(createProductItemElement(element)));
    });
  cartItems.innerHTML = getSavedCartItems(cartItems);
  addClickEventToLoadedCartItems();
  allowClearCart();
};

if (typeof module !== 'undefined') {
  module.exports = cartItemClickListener;
}
