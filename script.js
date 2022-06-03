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

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const saveCartPrice = (newPrice) => localStorage.setItem('cartPrice', newPrice);

const getCartPrice = () => JSON.parse(localStorage.getItem('cartPrice'));

const calculateCartPrice = (newItemPrice = 0) => {
  const cartCurrentPrice = getCartPrice();
  if (!getCartPrice) saveCartPrice(newItemPrice);
  saveCartPrice(cartCurrentPrice + newItemPrice);
};

const loadCartPrice = () => {
  const cartPrice = getCartPrice();
  const cartPriceElement = document.querySelector('.total-price');
  if (cartPrice === 0) cartPriceElement.innerText = '';
  else cartPriceElement.innerText = cartPrice;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  const price = event.target.innerText.match(/PRICE: \$([\d.]+)/)[1];
  calculateCartPrice(-1 * price);
  loadCartPrice();
  const newOlCartItems = document.getElementsByClassName('cart__items')[0];
  saveCartItems(newOlCartItems.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const populatePage = async () => {
  const itemsSection = document.getElementsByClassName('items')[0];
  const { results } = await fetchProducts('computador');
  results.forEach((result) => {
    const { id: sku, title: name, thumbnail: image } = result;
    const productInfo = {
      sku,
      name,
      image,
    };
    const newItem = createProductItemElement(productInfo);
    itemsSection.appendChild(newItem);
  });
};

const addToCart = async (event) => {
  const olCartItems = document.getElementsByClassName('cart__items')[0];
  const productCard = event.target.parentElement;
  const productId = getSkuFromProductItem(productCard);
  const { id: sku, title: name, price: salePrice } = await fetchItem(productId);

  calculateCartPrice(salePrice);

  const newCartItem = createCartItemElement({ sku, name, salePrice });
  olCartItems.appendChild(newCartItem);
  const newOlCartItems = document.getElementsByClassName('cart__items')[0];
  saveCartItems(newOlCartItems.innerHTML);
  loadCartPrice();
};

const loadCartItems = () => {
  const cartItems = getSavedCartItems();
  const olCartItems = document.getElementsByClassName('cart__items')[0];
  const cart = document.querySelector('.cart');
  olCartItems.remove();
  const newOlCartItems = document.createElement('ol');
  newOlCartItems.className = 'cart__items';
  newOlCartItems.innerHTML = cartItems;
  const newLiCartItems = newOlCartItems.querySelectorAll('.cart__item');
  console.log(newLiCartItems);
  newLiCartItems.forEach((item) => item.addEventListener('click', cartItemClickListener));
  cart.prepend(newOlCartItems);
};

const clearCart = () => {
  localStorage.removeItem('cartItems');
  localStorage.removeItem('cartPrice');
  loadCartItems();
  loadCartPrice();
};

window.onload = async () => {
  await populatePage();
  loadCartItems();
  loadCartPrice();
  const addToCartButtons = document.querySelectorAll('.item__add');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
  const emptyCartButton = document.querySelector('.empty-cart');
  emptyCartButton.addEventListener('click', clearCart);
 };
