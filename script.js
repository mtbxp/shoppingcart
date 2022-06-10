const container = document.querySelector('.items');
const cartItemsList = document.querySelector('.cart__items');

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

const cartItemClickListener = ({ target }) => {
  target.remove();
  saveCartItems(cartItemsList.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const appendProductToCart = (product) => cartItemsList.append(product);

const appendSavedProducts = (param) => {
  cartItemsList.innerHTML = param;
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => item.addEventListener('click', cartItemClickListener));
};

const loadingToggle = (location) => {
  const loading = location.querySelector('.loading');
  if (!loading) {
    const h3 = document.createElement('h3');
    h3.className = 'loading';
    h3.innerHTML = 'carregando...';
    location.append(h3);
    return;
  }
  loading.remove();
};

const addToCart = async ({ target }) => {
  loadingToggle(cartItemsList);
  const id = getSkuFromProductItem(target.parentNode);
  const product = createCartItemElement(await fetchItem(id));
  loadingToggle(cartItemsList);
  appendProductToCart(product);
  saveCartItems(cartItemsList.innerHTML);
};

const addToCartEventListener = () => {
  const addToCartBtn = document.querySelectorAll('.item__add');
  addToCartBtn.forEach((element) => element.addEventListener('click', addToCart));
};

const createList = async () => {
  const products = await fetchProducts('computador');
  loadingToggle(container);
  products.results.forEach((product) => container.appendChild(createProductItemElement(product)));
  addToCartEventListener();
};

const emptyCartEventListener = () => 
  document.querySelector('.empty-cart').addEventListener('click', () => {
  cartItemsList.innerHTML = '';
  localStorage.removeItem('cartItems');
  });

window.onload = () => {
  loadingToggle(container);
  createList();
  appendSavedProducts(getSavedCartItems());
  emptyCartEventListener();
};
