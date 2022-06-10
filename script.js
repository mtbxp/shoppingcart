const CART_CLASS = '.cart__items';

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
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getPriceFromString = (element) => element.textContent.replace('.', '').replace(',', '.'); 

const formatPriceToString = (price) => {
  const stringOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString('pt-br', stringOptions);
};

const updateTotalPrice = (price) => {
  const currentPrice = document.querySelector('.total-price');
  if (price === undefined) {
    currentPrice.textContent = '0,00';
    return;    
  }
  const currentPriceValue = getPriceFromString(currentPrice); 
  const newPrice = parseFloat(currentPriceValue) + price;
  currentPrice.textContent = formatPriceToString(newPrice);
};

const updateLocalStorage = () => {
  const cart = document.querySelector(CART_CLASS);
  const cartHTML = cart.outerHTML;
  saveCartItems(cartHTML);
};

const cartItemClickListener = (event) => {
  const item = event.target.parentElement;
  const price = getPriceFromString(item.querySelector('.cart__price'));
  item.remove();
  updateTotalPrice(-parseFloat(price));
  updateLocalStorage();
};

const createCartItemImage = (image) => {
  const div = document.createElement('div');
  const img = createProductImageElement(image);
  div.className = 'cart__image';
  div.append(img);
  return div;
};

const createCartItemDescription = ({ sku, name, salePrice }) => {
  const div = document.createElement('div');
  adjustedPrice = formatPriceToString(salePrice);
  div.append(createCustomElement('p', 'cart__sku', sku));
  div.append(createCustomElement('p', 'cart__name', name));
  div.append(createCustomElement('p', 'cart__price', adjustedPrice));
  div.className = 'cart__description';
  return div;
};

const createCartItemElement = ({ sku, name, salePrice, image }) => {
  const li = document.createElement('li');
  const cartImage = createCartItemImage(image);
  const cartDescription = createCartItemDescription({ sku, name, salePrice });
  const cartRemove = createCustomElement('span', 'cart__remove', 'x');
  li.className = 'cart__item';
  li.append(cartImage);
  li.append(cartDescription);
  li.append(cartRemove);
  cartRemove.addEventListener('click', cartItemClickListener);
  updateTotalPrice(salePrice);
  return li;
};

const addItemToCartFromAddButton = async (event) => {
  const cart = document.querySelector(CART_CLASS);
  const itemId = getSkuFromProductItem(event.target.parentElement);
  const item = await fetchItem(itemId);
  const { id: sku, title: name, price: salePrice, thumbnail: image } = item;
  const cartItem = createCartItemElement({ sku, name, salePrice, image });
  cart.append(cartItem);
  updateLocalStorage();
};

const addProductsToSite = async () => {
  const items = document.querySelector('.items');
  const loading = createCustomElement('section', 'loading', 'carregando...');
  items.append(loading);
  const products = await fetchProducts('computador');
  loading.remove();
  products.results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    const productSection = createProductItemElement({ sku, name, image });
    items.append(productSection);
  });
  const addItemButtons = document.querySelectorAll('.item__add');
  addItemButtons.forEach((button) => button.addEventListener('click', addItemToCartFromAddButton));
};

const emptyCart = () => {
  const cart = document.querySelector(CART_CLASS);
  cart.innerHTML = '';
  updateTotalPrice();
  localStorage.removeItem('cartItems');
};

const addItemsFromLocalStorage = () => {
  const storedCartItems = getSavedCartItems();
  const cart = document.querySelector(CART_CLASS);
  cart.outerHTML = storedCartItems;
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((item) => {
    item.querySelector('.cart__remove').addEventListener('click', cartItemClickListener);
    const price = item.querySelector('.cart__price').textContent;
    updateTotalPrice(parseFloat(price));
  });
};

const checkLocalStorage = () => {
  if (localStorage.getItem('cartItems') !== null) {
    addItemsFromLocalStorage();
  }
};

const emptyCartButton = document.querySelector('.empty-cart');
emptyCartButton.addEventListener('click', emptyCart);

window.onload = () => { 
  addProductsToSite();
  checkLocalStorage();
};
