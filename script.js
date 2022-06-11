const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

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

const addItemsToLocalStorage = () => {
  const textToBeSaved = cartItems.innerHTML;
  saveCartItems(textToBeSaved);
};

const cartItemClickListener = (event) => {
  event.target.remove();
  addItemsToLocalStorage();
};

const loadLocalData = () => {
  const savedItems = getSavedCartItems();
  cartItems.innerHTML = savedItems;
  const lis = document.querySelectorAll('li');
  lis.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createItemsList = async () => {
  await fetchProducts('computador').then(({ results }) => {
    results.forEach((product) => {
      items.appendChild(createProductItemElement(product));
    });
  });
};

// --------------------------- Fourth requirement ----------------------------- //

const addition = (info) => {
  cartItems.appendChild(createCartItemElement(info));
};

const addEventToProducts = async (event) => {
  const id = getSkuFromProductItem(event.target.parentNode);
  await fetchItem(id).then((data) => addition(data));
  addItemsToLocalStorage();
};

const addItemsToCart = () => {
  items.addEventListener('click', addEventToProducts);
};

window.onload = () => {
  createItemsList();
  addItemsToCart();
  loadLocalData();
};
