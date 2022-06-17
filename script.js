const section = document.querySelector('.items');
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
  const newSection = document.createElement('section');
  newSection.className = 'item';
  newSection.appendChild(createCustomElement('span', 'item__sku', sku));
  newSection.appendChild(createCustomElement('span', 'item__title', name));
  newSection.appendChild(createProductImageElement(image));
  newSection.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return newSection;
};

const createLoadingText = () => {
  const paragraph = document.createElement('p');
  const father = document.querySelector('.cart');
  paragraph.className = 'loading';
  paragraph.innerText = 'carregando...';
  father.appendChild(paragraph);
};

const removeLoadingText = () => document.querySelector('.loading').remove();
const functionReturn = async () => {
  createLoadingText();
  const products = await fetchProducts('computador');
  removeLoadingText();
  products.results.forEach((argument) => {
    const child = createProductItemElement(argument);
    section.appendChild(child);
  });
};

const cartValue = () => {
  const li = document.querySelectorAll('.cart__item');
  const showValue = document.querySelector('.total-price');
  let totalValue = 0;
  li.forEach((element) => {
    totalValue += (Number(element.innerText.split('$')[1]));
  });
  showValue.innerText = totalValue;
};

const cartItemClickListener = (event) => {
event.target.remove();
  saveCartItems(cart.innerHTML);
  cartValue();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const removeSavedItems = () => {
  cart.childNodes.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

const cartItems = async (event) => {
  const id = event.target.parentElement.firstChild.innerHTML;
  const products = await fetchItem(id);
  const createItem = createCartItemElement(products);
  cart.appendChild(createItem);
  cartValue();
  saveCartItems(cart.innerHTML);
  removeSavedItems();
};

const addButton = () => {
  const button = document.getElementsByClassName('item__add');
  const modifyButton = Array.from(button);
  modifyButton.forEach((element) => {
    element.addEventListener('click', cartItems);
  });
};

const removeItems = () => {
  const items = document.querySelectorAll('.cart__item');
  items.forEach((item) => {
    item.remove();
  });
};
const button = document.querySelector('.empty-cart');
button.addEventListener('click', removeItems);

const showList = () => {
  cart.innerHTML = getSavedCartItems();
  removeSavedItems();
};

window.onload = async () => {
  await functionReturn();
  addButton();
  showList();
 };
