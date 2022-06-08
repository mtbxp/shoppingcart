// const getSavedCartItems = require('./helpers/getSavedCartItems');
// const saveCartItems = require('./helpers/saveCartItems');
// const item = require('./mocks/item');

const refreshStorage = async (obj) => {
  try {
    const lcStog = await getSavedCartItems();
    if (lcStog === null) {
      const newArr = [];
      newArr.push(obj);
      saveCartItems(newArr);
      return;
    }
    if (typeof obj === 'string') {
      const newArr = await lcStog.filter((objItem) => Object.keys(objItem)[0] !== obj);
      saveCartItems(newArr);
    } 
    if (typeof obj === 'object') {
      lcStog.push(obj);
      saveCartItems(lcStog);
    }
  } catch (error) {
      console.log(error);    
    }
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
  const itemInfos = await fetchItem(itemSku);
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
    const lcStog = await getSavedCartItems();
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

const init = async () => {
  const obj = await fetchProducts('computador');
  const secItems = document.getElementsByClassName('items')[0];
  const buttons = document.getElementsByClassName('item__add');
  // localStorage.clear();
  loadStorage();
  Object.values(obj).forEach((element) => {
    const newObj = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    secItems.appendChild(createProductItemElement(newObj));
  });
  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', moveToCart);
  }
};

window.onload = init;
