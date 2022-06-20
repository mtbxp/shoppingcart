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

const createProductItemElement = ({ sku, name, image, salePrice }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cart = document.querySelector('ol.cart__items');
const cartSection = document.querySelector('.cart');

const totalPrice = document.createElement('h3');
totalPrice.className = 'total-price';
let pricesSum = 0;

const storagePrices = () => localStorage.setItem('price', +pricesSum.toFixed(2));

const insertCartTotalElement = () => {
  if (+pricesSum.toFixed(2) === 0) {
    totalPrice.innerHTML = '';
  } else { 
  totalPrice.innerHTML = +pricesSum.toFixed(2);
  }
  cartSection.insertBefore(totalPrice, cartSection.children[1]);
};

const cartSum = (newPrice) => {
  pricesSum += newPrice;
  storagePrices();
  insertCartTotalElement();
};

const cartSub = (element) => {
  const priceToBeSub = element.innerText
    .match(/(\d+)\.\d*|(\d+)/g)
    .pop();
    // consulta em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#trabalhando_com_express%C3%B5es_regulares
  pricesSum -= priceToBeSub;
  storagePrices();
  insertCartTotalElement();
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const cartItem = event.target;
  cartItem.remove();
  saveCartItems('');
  saveCartItems(cart.innerHTML);
  cartSub(cartItem);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createLoadingMessage = (element) => {
  element.appendChild(createCustomElement('h1', 'loading', 'loading...'));
};

const removeLoadingMessage = (element) => {
  const loading = document.querySelector(element);
  loading.remove();
};

const products = async () => {
  const items = document.querySelector('.items');
  createLoadingMessage(items);
  const { results } = await fetchProducts('computador');
  removeLoadingMessage('.loading');
  return results.map((item) => {
    const { id: sku, title: name, thumbnail: image, price: salePrice } = item;
    items.appendChild(createProductItemElement({ sku, name, image, salePrice }));
    return items;
  });
};

const getProductsForCartItem = async (event) => {
  const item = event.target.parentElement;
  const id = getSkuFromProductItem(item);
  const data = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = data;
  cart.appendChild(createCartItemElement({ sku, name, salePrice }));
  saveCartItems(cart.innerHTML);
  cartSum(salePrice);
  return cart;
};

const productsListener = () => document.querySelectorAll('button.item__add')
  .forEach((element) => {
    element.addEventListener('click', getProductsForCartItem);
  });

const loadCart = () => {
  const cartItems = getSavedCartItems();
  cart.innerHTML = cartItems;
  document.querySelectorAll('li.cart__item')
    .forEach((element) => {
      element.addEventListener('click', cartItemClickListener);  
    });
  const storage = () => (localStorage.getItem('price'));
  pricesSum = storage();
  if (pricesSum !== null) insertCartTotalElement();
};

const emptyCart = () => {
  while (cart.hasChildNodes()) {
    cart.removeChild(cart.firstChild);
  }
  localStorage.clear();
  totalPrice.innerHTML = '';
  pricesSum = 0;
};

const emptyListener = () => document.querySelector('button.empty-cart')
  .addEventListener('click', emptyCart);

window.onload = async () => { 
  await products();
  productsListener();
  emptyListener();
  loadCart(); 
};
