const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

let arr = [];

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItem = document.querySelector('.cart__items');
const counter = document.querySelector('.total-price');

const cartItemClickListener = (event) => {
  event.target.remove();
  console.log(event.target.innerHTML);
  arr.reduce((acc, cur) => acc - cur);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  cartItem.appendChild(li);
  arr.push(salePrice);
  counter.className = 'total-price';
  const result = arr.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  counter.innerText = result;
};

const loadingHide = () => {
  const loading = document.querySelector('.loading'); 
   loading.remove();
 };

const loadingShow = () => {
  const li = document.createElement('p');
  li.className = 'loading';
  li.innerText = 'carregando...';
  const header = document.querySelector('.header'); 
  header.appendChild(li);
  setTimeout(loadingHide, 500);
};

const prepareCartList = async (itemId) => {
  const data = await fetchItem(itemId);
  const salePrice = data.price;
  const sku = data.id;
  const name = data.title;
  const result = {
    sku,
    name,
    salePrice,
  };
  createCartItemElement(result);
};

const localStorageList = () => {
 const items = JSON.parse(getSavedCartItems());
 for (let index = 0; index < items.length; index += 1) {
  prepareCartList(items[index]);
 }
};
const storageItem = [];
const teste = (event) => {
 const data = event.target.parentNode.firstChild.innerText;
 storageItem.push(data);
 prepareCartList(data);
 saveCartItems(storageItem);
  return data;
};

const createProductItemElement = ({
  sku,
  name,
  image,
}) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const item = document.querySelector('#item');
  const addItem = document.querySelectorAll('.item__add');
  item.appendChild(section);
  addItem.forEach((entry) => entry.addEventListener('click', teste));
};

const prepareSite = async () => {
    loadingShow();

    const data = await fetchProducts('computador');
    const dataLength = data.results;
    for (let index = 0; index < dataLength.length; index += 1) {
    const sku = data.results[index].id;
    const name = data.results[index].title;
    const image = data.results[index].thumbnail;
    const result = {
      sku,
      name,
      image,
    };
    createProductItemElement(result);
  }
  localStorageList();
  };

const btn = document.querySelector('.empty-cart');
btn.addEventListener('click', () => {
cartItem.innerHTML = '';
arr = [];
counter.innerText = '00,00';
localStorage.removeItem('cartItems');
});

window.onload = () => {
  prepareSite();
 };
