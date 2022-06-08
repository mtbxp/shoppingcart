function calculatePrice() {
  let prices = [];
  const lis = document.getElementsByClassName('cart__item');
  if (lis.length === 0) {
    return 'Empty Cart';
  }
  for (let index = 0; index < lis.length; index += 1) {
    const words = lis[index].innerText.split(' ');
    const wordsLength = words.length;
    prices.push(words[wordsLength - 1]);
  }
  prices = (prices.map((price) => price.replace('$', '')));
  
  const newPrices = prices.map((price) => parseFloat(price, 10));

  const total = newPrices.reduce((acc, currentValor) => acc + currentValor);
  return total;
}

function putTotalPriceInP() {
  const p = document.getElementsByClassName('total-price')[0];
  p.innerText = `Total Price: $${calculatePrice()}`;
}

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
// ___________________________________________________________________
// Para um unico requisito!!!!
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

function removeLoading() {
  const h1 = document.getElementsByClassName('loading')[0];
  h1.remove();
}

function putElementInSection({ sku, name, image }) {
  const sectionFather = document.getElementsByClassName('items')[0];
  const section = createProductItemElement({ sku, name, image });
  sectionFather.appendChild(section);
}

const createItems = async () => {
  const array = [];
    const data = await fetchProducts();
    data.results.forEach((item) => {
     array.push({ sku: item.id, name: item.title, image: item.thumbnail });
   });
   array.forEach((item) => {
   createProductItemElement(item);
   putElementInSection(item);
   });
   removeLoading();
 };
 // __________________________________________________________________

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const li = event.target;
  li.remove();
};

function saveCartItems2() {
  const cartItem = document.getElementsByClassName('cart__item');
  const array = [];
  for (let index = 0; index < cartItem.length; index += 1) {
   array.push(cartItem[index].innerHTML);
  }
 localStorage.setItem('cartItems', JSON.stringify(array));
}

// ___________________________________________________________________
// Para um unico requisito!!!

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

function putElementInOl({ sku, name, salePrice }) {
  const olFather = document.getElementsByClassName('cart__items')[0];
  const li = createCartItemElement({ sku, name, salePrice });
  olFather.appendChild(li);
  saveCartItems2();
  putTotalPriceInP();
}

function getID(event) {
  const button = event.target;
  const parent = button.parentNode;
  fetchItem(getSkuFromProductItem(parent))
  .then((data) => {
  const obj = { sku: data.id, name: data.title, salePrice: data.price };
  createCartItemElement(obj);
  putElementInOl(obj);
  });
}

const getButtons = () => {
  let buttons = [];
  buttons = document.getElementsByClassName('item__add');
  for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', getID);
  }
};
// ___________________________________________________________________

// ___________________________________________________________________
const emptyCarty = document.getElementsByClassName('empty-cart')[0];

function emptyCartyFunction() {
  const olFather = document.getElementsByClassName('cart__items')[0];
  olFather.innerHTML = '';
  putTotalPriceInP();
}

emptyCarty.addEventListener('click', emptyCartyFunction);
// ______________________________________________________________________

function createLoading() {
  const h1 = document.createElement('h1');
  const section = document.getElementsByClassName('cart')[0];
  section.appendChild(h1);
  h1.className = 'loading';
  h1.innerText = 'carregando...';
}

function loadLocalStorage() {
  if (getSavedCartItems() === null) {
    return null;
  }
  const newArray = JSON.parse(getSavedCartItems());
  const olFather = document.getElementsByClassName('cart__items')[0];
  for (let index = 0; index < newArray.length; index += 1) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = newArray[index];
  olFather.appendChild(li);
}
}

function activateFunction() {
  const cartItem = document.getElementsByClassName('cart__item');

  for (let index = 0; index < cartItem.length; index += 1) {
    cartItem[index].addEventListener('click', cartItemClickListener);
  }
}

window.onload = () => { 
  createItems()
  .then(getButtons);
  loadLocalStorage();
  createLoading();
  activateFunction();
  putTotalPriceInP();
};
