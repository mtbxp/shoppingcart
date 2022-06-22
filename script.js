// Variables - DOM
const cartItems = document.querySelector('.cart__items');
const container = document.querySelector('.container');

// Variables
const prices = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;  
};

function loadingAPI() {
  const loading = document.createElement('span');
  loading.innerHTML = 'carregando...';
  loading.className = 'loading';
  container.appendChild(loading);
}
function finishedLoading() {
  container.lastChild.remove();
}

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = async (event) => {
  event.target.remove(); // Obtive ajuda neste requisito
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProcuctCart = async (event) => {
  const productID = getSkuFromProductItem(event.target.parentElement);
  const data = await fetchItem(productID);

  prices.push(data.price);
  console.log(prices);

  cartItems.appendChild(createCartItemElement(data));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', addProcuctCart);

  return section;
};

const emptyCartClickListener = () => {
  console.log(cartItems);
  cartItems.innerHTML = ' ';
};

const cleanCart = () => {
  const emptyCart = document.querySelector('.empty-cart');

  emptyCart.addEventListener('click', emptyCartClickListener);
};

// Obtive ajuda nesses exercícios
const getItemsInfo = async () => {
  loadingAPI();
  const response = await fetchProducts('computador');
  const { results } = response;
  finishedLoading();
  
  const productsInfo = [];

  results.forEach((item) => {
    const { id: sku, title: name, thumbnail: image } = item;

    productsInfo.push({ sku, name, image });
  });

  return productsInfo;
};

const createListProducts = async () => {
  const items = document.querySelector('.items');

  (await getItemsInfo()).forEach((item) => {
    items.appendChild(createProductItemElement(item));
  });
};

const starting = () => {
  createListProducts();
  cleanCart();
};

window.onload = () => { starting(); };
