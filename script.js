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

const cutDecimals = (allPrices) => {
  let endpoint = allPrices.length;
  let newPrice = '';
  for (let index = 0; index < endpoint; index += 1) {
    // if (allPrices[index] !== undefined) newPrice += allPrices[index];
    if (allPrices[index] === '.') {
      endpoint = index;
    } else {
      newPrice += allPrices[index];
    }    
  }
  return newPrice;
};

const sumValues = (lcStog) => {
  console.log('entrou');
  const allPrices = document.getElementsByClassName('total-price')[0];
  try {    
    let sum = 0;
    let checkDec = '';
    lcStog.forEach((obj) => {
      const { salePrice } = Object.values(obj)[0];
      console.log(salePrice);
      sum += salePrice;
    });
    checkDec += sum;
    const newPrice = cutDecimals(checkDec);
    console.log(newPrice); 
    allPrices.innerText = newPrice;    
  } catch (error) {
    console.log(error);    
  }
};

const addItem = (lcStog, obj) => {
  if (typeof obj === 'object') {
    lcStog.push(obj);
    saveCartItems(lcStog);
  }
};

const deleteItem = (lcStog, obj) => {
  if (typeof obj === 'string') {
    const newArr = lcStog.filter((objItem) => Object.keys(objItem)[0] !== obj);
    saveCartItems(newArr);
  } 
};

const firstItem = (lcStog, obj) => {
  try {
    if (lcStog === null) {
      const newArr = [];
      newArr.push(obj);
      saveCartItems(newArr);
    }    
  } catch (error) {
    console.log(error);    
  }
};

const refreshStorage = async (obj) => {
  try {
    loadingOn();
    let lcStog = getSavedCartItems();
    loadingOff();
    firstItem(await lcStog, obj);
    deleteItem(await lcStog, obj);
    addItem(await lcStog, obj);
    loadingOn();
    lcStog = getSavedCartItems();
    loadingOff();
    sumValues(await lcStog);
  } catch (error) {
      console.log(error);    
    }
};

const eraseAll = () => {
  const newArr = [];
  const cartItems = document.getElementsByClassName('cart__items')[0];
  cartItems.innerText = '';
  saveCartItems(newArr);
  refreshStorage();
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
  console.log();
  let cathSku = '';
  for (let index = 5; index < 18; index += 1) {
    cathSku += (event.target.innerText[index]);
  }
  console.log(cathSku);
  refreshStorage(cathSku);
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
  console.log(itemSku);
  loadingOn();
  const itemInfos = await fetchItem(itemSku);
  loadingOff();
  const cartItems = document.getElementsByClassName('cart__items')[0];
  const obj = {
    sku: await itemInfos.id,
    name: await itemInfos.title,
    salePrice: await itemInfos.price,
  };
  refreshStorage({ [itemInfos.id]: obj });
  cartItems.appendChild(createCartItemElement(obj));
};

const loadStorage = async () => {
  try {
    const cartItems = document.getElementsByClassName('cart__items')[0];
    loadingOn();
    const lcStog = getSavedCartItems();
    loadingOff();
    console.log(lcStog);
    lcStog.forEach((item) => {
      console.log(Object.values(item)[0]);
      const cartElement = createCartItemElement(Object.values(item)[0]);
      cartItems.appendChild(cartElement);
    });
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
  await refreshStorage();
  loadingOn();
  const obj = await fetchProducts('computador');
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
