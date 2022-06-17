const items = document.getElementsByClassName('items')[0];
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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const createListOfProducts = async () => {
  const products = await fetchProducts('computador')
  .then((object) => object.results);
  products.forEach((item) => {
    items.appendChild(createProductItemElement(item));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getCartValue = () => {
  const sectionPrice = document.querySelector('.total-price');
  const cartItems = Array.from(document.querySelectorAll('.cart__item'));
  let valor = 0;
  cartItems.forEach((element) => {
    const value = element.innerHTML;
    valor += Number(value.split('$')[1]);
  });
  sectionPrice.innerHTML = valor;
};

const deleteItemFromCart = (event) => {
  if (event.target.className === 'cart__item') {
  cart.removeChild(event.target);
  saveCartItems(cart.innerHTML);
  getCartValue();
  }
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', deleteItemFromCart);
  return li;
};

const addItemToCart = () => {
  items.addEventListener('click', async (event) => {
    if (event.target.classList.contains('item__add')) {
    const id = getSkuFromProductItem(event.target.parentElement);
    const item = await fetchItem(id);
    cart.appendChild(createCartItemElement(item));
    saveCartItems(cart.innerHTML);
    getCartValue();
    }
  });
};

const reloadCart = () => {
  const setList = getSavedCartItems();
  if (setList) {
    cart.innerHTML = setList;
    getCartValue();
  }
};

const cartItemClickListener = () => {
  const cartList = document.querySelectorAll('.cart__item');
  cartList.forEach((element) => {
    element.addEventListener('click', deleteItemFromCart);
  });
};

window.onload = () => { 
  createListOfProducts(); 
  addItemToCart(); 
  reloadCart();
  cartItemClickListener(); 
  getCartValue();
};