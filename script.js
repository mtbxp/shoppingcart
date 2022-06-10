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

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemsList = document.querySelector('.cart__items');

const cartItemClickListener = ({ target }) => {
  target.remove();
  saveCartItems(cartItemsList.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `<span class="hide item__sku">SKU: ${id}</span>${title}<br><b>R$${price}</b>`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const appendProductToCart = (product) => cartItemsList.append(product);

const appendSavedProducts = (param) => {
  cartItemsList.innerHTML = param;
  const teste = document.querySelectorAll('.cart__item');
  teste.forEach((value) => value.addEventListener('click', cartItemClickListener));
};

const addToCart = async ({ target }) => {
  const id = getSkuFromProductItem(target.parentNode);
  const product = createCartItemElement(await fetchItem(id));
  appendProductToCart(product);
  saveCartItems(cartItemsList.innerHTML);
};

const addToCartEventListener = () => {
  const addToCartBtn = document.querySelectorAll('.item__add');
  addToCartBtn.forEach((element) => element.addEventListener('click', addToCart));
};

const createList = async () => {
  const products = await fetchProducts('computador');
  const container = document.querySelector('.items');
  products.results.forEach((product) => container.appendChild(createProductItemElement(product)));
  addToCartEventListener();
};

const emptyCartEventListener = () => 
  document.querySelector('.empty-cart').addEventListener('click', () => {
  cartItemsList.innerHTML = '';
  localStorage.removeItem('cartItems');
  });

window.onload = () => {
  createList();
  appendSavedProducts(getSavedCartItems());
  emptyCartEventListener();
};
