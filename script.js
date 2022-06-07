/* const { list } = require('mocha/lib/reporters/base'); */
const totPrice = document.querySelector('.total-price');
const listShop = document.getElementsByClassName('cart__items');

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

const cartItemClickListener = (event) => {
  // Referência:https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
  listShop.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Somando os valores totais
const sumValShop = () => {
  if (listShop.length === 0) {
    totPrice.innerHTML = 'Total: $0';
  }
  const totalVal = listShop.reduce((arr, val) => arr.salePrice + val.salePrice, 0);
  totPrice.innerHTML = `Total: $${Math.round(totalVal)}`;
};

// Clear Buttom
const buttom = document.querySelector('.empty-cart');
buttom.addEventListener('click', () => {
  listShop.innerHTML = '';
});

window.onload = async () => {
  listShop.innerHTML = await getSavedCartItems();
};
