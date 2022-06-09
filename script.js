const itemsList = document.getElementsByClassName('items');
const cartItems = document.getElementsByClassName('cart__items'); 
const totalPriceSpan = document.getElementsByClassName('total-price');
const btnClearCartItems = document.getElementsByClassName('empty-cart'); 
const cart = document.getElementsByClassName('cart'); 

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

const createProductItemElement = ({ sku, name, price, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `$${price}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const clearClass = (classItem) => {
  let childimg = classItem[0].lastElementChild;
  while (childimg) {
    classItem[0].removeChild(childimg);
    childimg = classItem[0].lastElementChild;
  }
};

const updateTotalPrice = () => {
  const items = document.querySelectorAll('.cart__item');
  let total = 0;
  items.forEach((item) => {
    let value = item.innerHTML;
    value = value.slice(value.indexOf('$') + 1, value.length);
    total += Number(value);
  });
  totalPriceSpan[0].innerHTML = total;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  updateTotalPrice();
  saveCartItems(cartItems[0].innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: ${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const updateListCartItems = () => {
  cartItems[0].innerHTML = getSavedCartItems('cartItems');
  updateTotalPrice();
};

const getSkuFromProductItem = (item) => {
  const sku = item.querySelector('span.item__sku').innerText;
  const name = item.querySelector('span.item__title').innerText;
  const salePrice = item.querySelector('span.item__price').innerText;
  return { sku, name, salePrice };
};

const addCartItemClickListener = () => {
  document.querySelectorAll('.item__add').forEach((item) => {
    item.addEventListener('click', (e) => {
      const { sku, name, salePrice } = getSkuFromProductItem(e.target.parentNode);
      cartItems[0].appendChild(createCartItemElement({ sku, name, salePrice }));
      saveCartItems(cartItems[0].innerHTML);
      updateTotalPrice();
    });
  });
};

const clearCart = () => {
  localStorage.removeItem('cartItems');
  clearClass(cartItems);
  totalPriceSpan[0].innerHTML = '';
};

const loadingMessage = () => {
  const msg = document.createElement('span');
  msg.innerText = 'Carregando...';
  msg.className = 'loading';
  itemsList[0].appendChild(msg);
};

const showListProducts = async () => {
  const data = await fetchProducts('computador');
  const msg = document.getElementsByClassName('loading');
  msg[0].style.display = 'none';
  data.map((item) => {
    const { id: sku, title: name, thumbnail: image, price } = item;
    const element = createProductItemElement({ sku, name, price, image });
    return itemsList[0].appendChild(element);
  });
  addCartItemClickListener();
};

const createTotalPrice = () => {
  const total = document.createElement('span');
  total.className = 'total-price';
  cart[0].appendChild(total);
};

btnClearCartItems[0].addEventListener('click', clearCart);
window.onload = () => { 
  loadingMessage();
  createTotalPrice();
  showListProducts();
  updateListCartItems();
};