const cartItems = document.querySelector('.cart__items');
const items = document.querySelector('.items');
const total = document.querySelector('.total-price');

const addLoading = () => {
  const loading = document.createElement('section');
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  document.querySelector('.title').style.display = 'flex';
  document.querySelector('.title').appendChild(loading);
};

const removeLoading = () => {
  document.querySelector('.loading').remove();
};

const calcCartPrice = () => {
  let price = 0;
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((element) => {
    price += parseFloat(element.innerHTML.split('$')[1]);
  });
  total.innerHTML = price;
};

const clearButton = document.querySelector('.empty-cart');
clearButton.addEventListener('click', () => {
  cartItems.innerHTML = '';
  total.innerHTML = '0.00';
  saveCartItems('');
});

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

const productsList = async () => {
  addLoading();
  const getFunction = await fetchProducts('computador');
  removeLoading();
  const getFunctionResult = getFunction.results;
  getFunctionResult.forEach((element) => {
    const item = createProductItemElement(element);
    items.appendChild(item);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
  calcCartPrice();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductsToCart = () => {
  items.addEventListener('click', async (event) => {
    const id = getSkuFromProductItem(event.target.parentNode);
    const apiElement = await fetchItem(id);
    const createCartItem = createCartItemElement(apiElement);
    cartItems.appendChild(createCartItem);
    calcCartPrice();
    saveCartItems(cartItems.innerHTML);
  });
};

const getCartItems = () => {
  cartItems.innerHTML = getSavedCartItems();
  document.querySelectorAll('.cart__item').forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

window.onload = () => {
  productsList();
  addProductsToCart();
  getCartItems();
  calcCartPrice();
};
