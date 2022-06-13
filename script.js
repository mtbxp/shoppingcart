// const getSavedCartItems = require("./helpers/getSavedCartItems");
const section = document.querySelector('.items');
const cart = document.querySelector('car__items');

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
  const newSection = document.createElement('section');
  newSection.className = 'item';
  newSection.appendChild(createCustomElement('span', 'item__sku', sku));
  newSection.appendChild(createCustomElement('span', 'item__title', name));
  newSection.appendChild(createProductImageElement(image));
  newSection.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return newSection;
};

const funcReturn = async () => {
    const products = await fetchProducts('computador');
    products.results.forEach((argument) => {
      const child = createProductItemElement(argument);
      section.appendChild(child);
    });
  };

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
const valueCart = () => {
  const li = document.querySelector('.cart__item');
  const values = document.querySelector('.total-price');
  let totalValue = 0;
  li.forEach((element) => {
    totalValue += (Number(element.innerText.split('$')[1]));
  });
  values.innerText = totalValue;
};

const cartItemClickListener = (event) => {
event.target.remove();
saveCartItems(cart.innerHTML);
values();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const cartItems = async (event) => {
  const id = event.target.parentElement.firstChild.innerHTML;
  const products = await fetchItem(id);
  const createItem = createCartItemElement(products);
  cart.appendChild(createItem);
  values();
  saveCartItems(cart.innerText);
  removeSavedItems();
};

const addBtn = () => {
  const bttn = document.getElementsByClassName('item__add');
  const modifyButton = Array.from(bttn);
  modifyButton.forEach((element) => {
    element.addEventListener('click', cartItems);
  });
};

const removeItems = () => {
  const items = documento.querySelectorAll('cart__item');
  items.forEach((item) => {
    item.remove();
  });
};

const buttonRemove = document.querySelector('.empty-cart');
buttonRemove.addEventListener('click', removeItems);

const showList = () => {
  cart.innerHTML = getSavedCartItems();
  removeSavedItems();
};

window.onload = async () => {
  await funcReturn();
  addBtn();
  showList();
};
