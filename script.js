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

const total = async () => {
  const itemsCart = await document.querySelectorAll('.cart__item');
  const pricesList = [];
  itemsCart.forEach((item) => {
    pricesList.push(Number(item.id));
  });
  console.log(pricesList);
  const sumPricesList = pricesList.reduce((soma, i) => soma + i);
  console.log(sumPricesList);
  document.querySelector('.total-price').innerText = sumPricesList;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  total();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function addToCart(event) {
  const clickedItem = await fetchItem(event.target.id);
  const li = createCartItemElement(clickedItem);
  document.querySelector('.cart__items').appendChild(li);
  li.id = clickedItem.price;
  total();
}

function addingIdsInAddToCartButtons(products) {
  const buttons = Array.from(document.getElementsByClassName('item__add'));
  products.forEach((product, indice) => { 
    buttons[indice].id = product.id;
  });
}

const emptyCart = () => {
  const totalPrice = document.querySelector('.total-price');
  const cart = document.querySelector('.cart__items');
  cart.innerHTML = '';
  totalPrice.innerHTML = '';
};

function addingEventListenerInAddToCartButtons() {
  const buttonsAddToCart = document.querySelectorAll('.item__add');
  buttonsAddToCart.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
}

function appendItemsInSection(products) {
  const itemSection = document.querySelector('.items');
  products.forEach((product) => {
    itemSection.appendChild(createProductItemElement(product));
  });
}

window.onload = async () => {
  const data = await fetchProducts('computador');
  const products = data.results;
  appendItemsInSection(products);
  addingEventListenerInAddToCartButtons();
  addingIdsInAddToCartButtons(products);
  const buttonEmptyCart = document.querySelector('.empty-cart');
  buttonEmptyCart.addEventListener('click', emptyCart);
};
