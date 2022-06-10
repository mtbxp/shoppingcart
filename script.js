// const getSavedCartItems = require('./helpers/getSavedCartItems');
// const saveCartItems = require('./helpers/saveCartItems');
// const item = require('./mocks/item');

const loadingOff = () => {
  const secItems = document.getElementsByClassName('items')[0];
  const element = document.getElementsByClassName('loading')[0];
  secItems.removeChild(element);
};

const loadingOn = () => {
  const secItems = document.getElementsByClassName('items')[0];
  const element = document.createElement('p');
  element.innerText = 'carregando...';
  element.classList.add('loading');
  secItems.appendChild(element);
};

const sumValues = async () => {
  const lcStog = await getSavedCartItems();
  const allPrices = document.getElementsByClassName('total-price')[0];
  try {    
    let sum = 0;
    let checkDec = '';
    lcStog.forEach((obj) => {
      const { salePrice } = Object.values(obj)[0];
      sum += salePrice;
    });
    checkDec += sum;
    const newPrice = checkDec;
    allPrices.innerText = newPrice;    
  } catch (error) {
    console.log(error);    
  }
};

const addItem = async (obj) => {
  const lcStog = await getSavedCartItems();
  if (obj !== undefined) {
    if (lcStog === null) {
      const newArr = [];
      newArr.push(obj);
      saveCartItems(newArr);
      sumValues();
    } else {
      lcStog.push(obj);
      saveCartItems(lcStog);
      sumValues();
    }
  }
};

const deleteItem = async (obj) => {
  const lcStog = await getSavedCartItems();
  if (typeof obj === 'string') {
    const newArr = lcStog.filter((objItem) => Object.keys(objItem)[0] !== obj);
    saveCartItems(newArr);
    sumValues();
  } 
};

const eraseAll = () => {
  const newArr = [];
  const cartItems = document.getElementsByClassName('cart__items')[0];
  cartItems.innerText = '';
  saveCartItems(newArr);
  sumValues();
};

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
  let cathSku = '';
  for (let index = 5; index < 18; index += 1) {
    cathSku += (event.target.innerText[index]);
  }
  deleteItem(cathSku);
  const elementTouch = event.target;
  elementTouch.parentElement.removeChild(elementTouch);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const moveToCart = async (event) => {
  const fatherElement = event.target.parentElement;
  const itemSku = fatherElement.firstChild.innerText;
  loadingOn();
  const itemInfos = await fetchItem(itemSku);
  loadingOff();
  const cartItems = document.getElementsByClassName('cart__items')[0];
  const obj = {
    sku: await itemInfos.id,
    name: await itemInfos.title,
    salePrice: await itemInfos.price,
  };
  addItem({ [itemInfos.id]: obj });
  cartItems.appendChild(createCartItemElement(obj));
};

const loadStorage = async () => {
  try {
    const cartItems = document.getElementsByClassName('cart__items')[0];
    const lcStog = await getSavedCartItems();
    if (lcStog !== null) {
      lcStog.forEach((item) => {
        const cartElement = createCartItemElement(Object.values(item)[0]);
        cartItems.appendChild(cartElement);
      });
      sumValues();
    }
  } catch (error) {
    throw new Error(error);    
  }
};

const addEvents = () => {
  const buttons = document.getElementsByClassName('item__add');
  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', moveToCart);
  }
  const btnEraseAll = document.getElementsByClassName('empty-cart')[0];
  btnEraseAll.addEventListener('click', eraseAll);
};

const init = async () => {
  loadingOn();
  let obj = await fetchProducts('computador');
  obj = obj.results;
  loadingOff();
  const secItems = document.getElementsByClassName('items')[0];
  loadStorage();
  Object.values(obj).forEach((element) => {
    const newObj = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    secItems.appendChild(createProductItemElement(newObj));
  });
  addEvents();
};

window.onload = init;
