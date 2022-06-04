const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const clearCartButton = document.querySelector('.empty-cart');
let totalPrice = 0;

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

const cartItemClickListener = (event) => {
  const element = event.target.innerText;
  const price = element.slice(element.indexOf('$') + 1);
  totalPrice -= price;
  const priceDiv = document.querySelector('.total-price');
  event.target.remove();
  priceDiv.innerText = Math.round(totalPrice * 100) / 100;
  return priceDiv;
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
};

const createPriceElement = () => {
  const div = document.createElement('div');
  div.className = 'total-price';

  clearCartButton.parentNode.insertBefore(div, clearCartButton);
};

const totalPriceCalculator = (price) => {
  const priceDiv = document.querySelector('.total-price');
  totalPrice += price;
  priceDiv.innerText = Math.round(totalPrice * 100) / 100;
  return priceDiv;
};

const saveCartPrice = (price) => {
  localStorage.setItem('totalCartPrice', price);
};

window.onload = () => {
  createPriceElement();
  cartItems.innerHTML = getSavedCartItems();
  fetchProducts('computador')
    .then((data) => data.results.forEach((element) =>
      items.appendChild(createProductItemElement(element))));
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('item__add')) {
      fetchItem(getSkuFromProductItem(e.target.parentNode))
        .then((item) => {
          totalPriceCalculator(item.price);
          cartItems.appendChild(createCartItemElement(item));
          saveCartItems(cartItems.innerHTML);
          saveCartPrice(totalPrice);
        });
    }
    if (e.target.classList.contains('cart__item')) return cartItemClickListener(e);
  });
};
