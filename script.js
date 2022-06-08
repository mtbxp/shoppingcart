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
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const updateTotalPrice = (price) => {
  const currentPrice = document.querySelector('.total-price');
  if (price === undefined) {
    currentPrice.textContent = '0,00';
    return;    
  }
  const currentPriceValue = currentPrice.textContent.replace('.', '').replace(',', '.'); 
  const stringOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const newPrice = parseFloat(currentPriceValue) + price;
  currentPrice.textContent = newPrice.toLocaleString('pt-br', stringOptions); // Formata como 1.000,00, por exemplo
};

const updateLocalStorage = () => {
  const cart = document.querySelector(CART_CLASS);
  const cartHTML = cart.outerHTML;
  saveCartItems(cartHTML);
};

const cartItemClickListener = (event) => {
  const item = event.target;
  const price = item.textContent.split('$')[1];
  item.remove();
  updateTotalPrice(-parseFloat(price));
  updateLocalStorage();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.addEventListener('click', cartItemClickListener);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  updateTotalPrice(salePrice);
  return li;
};

const addItemToCartFromAddButton = async (event) => {
  const cart = document.querySelector(CART_CLASS);
  const itemId = getSkuFromProductItem(event.target.parentElement);
  const item = await fetchItem(itemId);
  const { id: sku, title: name, price: salePrice } = item;
  const cartItem = createCartItemElement({ sku, name, salePrice });
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
    item.addEventListener('click', cartItemClickListener);
    const price = item.textContent.split('$')[1];
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
