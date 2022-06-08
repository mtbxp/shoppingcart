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
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = ({ target }) => {
  target.remove();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const teste = async ({ target }) => {
  const productId = getSkuFromProductItem(target.parentNode);
  const ol = document.querySelector('.cart__items');
  ol.append(createCartItemElement(await fetchItem(productId)));
};

const addToCartEventListener = () => {
  const addToCartBtn = document.querySelectorAll('.item__add');
  addToCartBtn.forEach((element) => element.addEventListener('click', teste));
};

const createList = async () => {
  const products = await fetchProducts('computador');
  const container = document.querySelector('.items');
  products.results.forEach((product) => container.appendChild(createProductItemElement(product)));
  addToCartEventListener();
};

window.onload = () => {
  createList();
};
