const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
const storageItem = [];
let arr = [];

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItem = document.querySelector('.cart__items');
const counter = document.querySelector('.total-price');
counter.className = 'total-price';

const cartItemClickListener = async (event) => {
  event.target.remove();
  const skku = event.target.id;
  const data = await fetchItem(skku);
  const index = arr.findIndex((element) => element === data.price);
  arr.splice(index, 1);
  const result = arr.reduce((acc, cur) => acc + cur, 0);
  counter.innerText = Math.ceil(result * 100) / 100;
};

const createCartItemElement = async ({
  sku,
  name,
  salePrice,
}) => {
  const li = document.createElement('li');
  li.id = `${sku}`;
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  cartItem.appendChild(li);
  arr.push(salePrice);
  const result = arr.reduce((acc, cur) => acc + cur, 0);
  counter.innerText = Math.ceil(result * 100) / 100;
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
  if (items.length === 'number') {
    items.forEach((element) => prepareCartList(element));
  }
};
const showLoading = () => {
  const div = document.createElement('div');
  div.className = 'loading';
  div.innerText = 'carregando...';
  const header = document.querySelector('.header');
  header.appendChild(div);
};

const clickItem = (event) => {
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
  addItem.forEach((entry) => entry.addEventListener('click', clickItem));
};

const prepareSite = async () => {
  showLoading();
  const data = await fetchProducts('computador');
if (typeof data.query === 'string') {
  const loading = document.querySelector('.loading');
  loading.remove();
  localStorageList();
  for (let index = 0; index < data.results.length; index += 1) {
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
}
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