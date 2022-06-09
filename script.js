const cart = document.querySelector('.cart__items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cart.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const itemCart = async (itemId) => {
  const data = await fetchItem(itemId);
  cart.appendChild(createCartItemElement(data));
  saveCartItems(cart.innerHTML);
};

const addProductsToCart = (event) => {
  const parent = event.target.parentElement;
  itemCart(getSkuFromProductItem(parent));
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', addProductsToCart);

  return section;
};

const createProductsList = async () => {
  const sectionItems = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const products = data.results;
  products.forEach((product) => sectionItems.appendChild(createProductItemElement(product)));
};

const loadCartOnStart = () => {
  const savedItems = document.querySelector('.cart__items');
  savedItems.innerHTML = getSavedCartItems();
  savedItems.addEventListener('click', cartItemClickListener);
};

const removeCartProducts = () => {
  const removeBtn = document.querySelector('.empty-cart');
  removeBtn.addEventListener('click', () => {
    cart.innerHTML = '';
    localStorage.setItem('cartProducts', '');
  });
};

window.onload = () => { createProductsList(); loadCartOnStart(); removeCartProducts(); };
