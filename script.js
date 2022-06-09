// const { fetchProducts } = require('./helpers/fetchProducts');
// const item = require('./mocks/item');
// const { results } = require('./mocks/search');

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

// cria os produtos na pagina
const insertProducts = async () => {
  const itemsGroup = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const allProducts = data.results;
  allProducts.forEach((product) => itemsGroup.appendChild(createProductItemElement(product)));
};

const getIDFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const calculateTotalPrice = () => {
  const totalPriceTag = document.querySelector('.total-price');
  const cart = document.querySelectorAll('.cart__item');
  const cartArray = Array.from(cart);
  const totalPrice = cartArray.reduce((total, currentProduct) => {
    const currentPrice = currentProduct.innerText.split('$')[1];
    return total + parseFloat(currentPrice);
  }, 0);
  totalPriceTag.innerHTML = Math.round(totalPrice * 100) / 100;
};
const cartItem = document.querySelector('.cart__items');

const cartItemClickListenerDelete = (event) => {
  cartItem.removeChild(event.target);
  saveCartItems(cartItem.innerHTML);
};

const ItemClicker = () => {
  // const cart = document.querySelectorAll('.cart__item');
  cart.forEach((item) => {
    item.addEventListener('click', cartItemClickListenerDelete);
  });  
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', ItemClicker);
  return li;
};

 const keepProducts = [];
 localStorage.setItem('products', JSON.stringify(keepProducts));

const addProduct = async () => {
  await insertProducts();
  const itemsGroup = document.querySelector('.items');
  const selectShopBtn = itemsGroup.querySelectorAll('button');
  selectShopBtn.forEach((element) => {
    element.addEventListener('click', async (event) => {
      const productId = getIDFromProductItem(event.target.parentElement);
      const product = await fetchItem(productId);
      const newItemOnCart = createCartItemElement(product);
      // const cartItem = document.querySelector('.cart__items');
      cartItem.appendChild(newItemOnCart);
    });
  });
};

const clearCart = () => {
  const cartItems = document.querySelector('.cart__items');
  const emptyCartBtn = document.querySelector('.empty-cart');
  emptyCartBtn.addEventListener('click', () => {
    cartItems.innerHTML = '';
    localStorage.setItem('cartItems', '');
    calculateTotalPrice();
  });
};

window.onload = () => { 
  insertProducts();
  addProduct();
  ItemClicker();
  calculateTotalPrice();
  clearCart();
};