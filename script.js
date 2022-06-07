const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
const cartItemClickListener = (event) => {
  event.target.remove();
};
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const cartItem = document.querySelector('.cart__items');
  cartItem.appendChild(li);
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
  setTimeout(loadingHide, 1000);
};



const arr = [];

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
const teste = (event) => {
 const data = event.target.parentNode.firstChild.innerText;
 const { innerHTML } = event.target.parentNode;
 prepareCartList(data);
 saveCartItems(innerHTML);
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
for (let index = 0; index < addItem.length; index += 1) {
  addItem[index].addEventListener('click', teste);
}
};

const salePrices = () => {
  const counter = document.createElement('p');
  counter.className = 'cart__item';
  const cartItem = document.querySelector('.cart__items');
  cartItem.appendChild(counter);
  arr.push(salePrice);
  counter.innerText = arr.reduce((acc, cur) => acc + cur);
}; 

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const prepareSite = async () => {
  const data = await fetchProducts('computador');
  const dataLength = data.results;
  const index = Math.round(Math.random() * dataLength.length);
  const sku = await data.results[index].id;
  const name = await data.results[index].title;
  const image = await data.results[index].thumbnail;
  const result = {
    sku,
    name,
    image,
  };
  createProductItemElement(result);
};

 function siteItens() {
  for (let index = 0; index < 50; index += 1) {
    prepareSite();
  }
}

const btn = document.querySelector('.empty-cart');
btn.addEventListener('click', () => {
const list = document.querySelector('.cart__items');
list.innerHTML = '';
});

window.onload = () => {
  siteItens();
  loadingShow();
};
