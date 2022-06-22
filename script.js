const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
//
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = (sku, name, image) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const calculateTotalPrice = () => {
  const totalPrice = document.querySelector('.total-price');
  const cart = document.querySelectorAll('.cart__item');
  const cartArray = Array.from(cart);
  const totalResult = cartArray.reduce((total, currentProduct) => {
    const currentPrice = currentProduct.innerText.split('$')[1];
    return total + parseFloat(currentPrice);
  }, 0);
  totalPrice.innerHTML = Math.round(totalResult * 100) / 100;
};

const cartItemClickListenerDelete = (event) => {
  const cart = document.querySelector('.cart__items');
  cart.removeChild(event.target);
  saveCartItems(cart.innerHTML);
  calculateTotalPrice();
};

const cartItemClickListener = () => {
  const cart = document.querySelectorAll('.cart__item');
  cart.forEach((item) => {
    item.addEventListener('click', cartItemClickListenerDelete);
  });  
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListenerDelete);
  return li;
};

const adicionarItens = () => {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const itemID = getSkuFromProductItem(event.target.parentNode);
      const item = await fetchItem(itemID);
      const { id: sku, title: name, price: salePrice } = item;
      const listItem = createCartItemElement({ sku, name, salePrice });
      const savedItems = document.querySelector('ol.cart__items');
      savedItems.append(listItem);
      calculateTotalPrice();
      saveCartItems(savedItems.innerHTML);
    });
  }); 
};

const productsOnScreen = async () => {
const itemSection = document.querySelector('.items');
const listProducts = await fetchProducts('computador');
listProducts.forEach(({ id, title, thumbnail }) => 
 itemSection.appendChild(createProductItemElement(id, title, thumbnail))); 
adicionarItens();
};

const emptyCart = () => {
  const cartItems = document.querySelector('.cart__items');
  const emptyCartBtn = document.querySelector('.empty-cart');
  emptyCartBtn.addEventListener('click', () => {
    cartItems.innerHTML = '';
    localStorage.setItem('cartItems', '');
    calculateTotalPrice();
  });
};

window.onload = () => { 
  productsOnScreen(); 
  getSavedCartItems();
  cartItemClickListener();
  calculateTotalPrice();
  emptyCart();
};
