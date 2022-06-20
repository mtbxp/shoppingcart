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

let arrayPricesCart = 0;
const cart = document.querySelector('ol.cart__items');
const totalPrice = document.createElement('h3');
totalPrice.className = 'total-price';
const cartSection = document.querySelector('.cart');
const storagePrices = () => localStorage.setItem('price', arrayPricesCart);

const insertCartTotalElement = () => {
  totalPrice.innerHTML = +arrayPricesCart.toFixed(2);
  cartSection.insertBefore(totalPrice, cartSection.children[1]);
};

const cartSum = (newPrice) => {
  arrayPricesCart += newPrice;
  storagePrices();
  insertCartTotalElement();
};

const cartSub = (item) => {
  const matchPrice = item.innerText.match(/(\d+)\.\d*|(\d+)/g).pop(); // consulta em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#trabalhando_com_express%C3%B5es_regulares
  arrayPricesCart -= matchPrice;
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

const products = async () => {
  const items = document.querySelector('.items');
  const { results } = await fetchProducts('computador');
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
  const storage = () => JSON.parse(localStorage.getItem('price'));
  arrayPricesCart = storage();
  if (arrayPricesCart !== null) insertCartTotalElement();
};

window.onload = async () => { await products(); productsListener(); loadCart(); };
