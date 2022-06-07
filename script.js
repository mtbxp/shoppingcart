let prices = [];
const carrinho = document.getElementsByClassName('cart__items')[0];

const calculatePrice = () => {
  const cart = document.getElementsByClassName('total-price')[0];
  const result = prices.reduce((acc, curr) => acc + curr, 0);
  cart.innerText = result;
};

const createLoading = () => {
  const loading = document.getElementsByClassName('loading')[0];
    loading.innerHTML = 'Loading...';
};

const deleteLoading = () => {
  const items = document.getElementsByClassName('items')[0];
  const loading = document.getElementsByClassName('loading')[0];
  items.removeChild(loading);
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

 // const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const elemento = event.target;
  const lista = Array.prototype.slice.call(
    document.getElementsByClassName('cart__items')[0].children,
    );
  const rmIndex = lista.indexOf(event.target);
  elemento.remove();
  prices.splice(rmIndex, 1);
  saveCartItems();
  calculatePrice();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  prices.push(salePrice);
  calculatePrice();
  return li;
};

const prepareSite = async () => {
  createLoading();
  const data = await fetchProducts('computador');
  deleteLoading();
  const obj = [];
  const result = [];
  data.results.forEach((element) => obj.push(
    { 
      sku: element.id, 
      name: element.title, 
      image: element.thumbnail,
    },
    ));
  obj.forEach((element) => result.push(createProductItemElement(element)));
  return result;
 };

 const showItens = async () => {
   const section = document.getElementsByClassName('items')[0];
   const childs = await prepareSite();
   childs.forEach((element) => section.appendChild(element));
};

const getElement = async (event) => {
  const section = event.target.parentNode;
  const id = section.firstElementChild.innerText;
  const element = await fetchItem(id);
  const obj = { sku: element.id, name: element.title, salePrice: element.price };
  const cart = document.getElementsByClassName('cart__items')[0];
  cart.appendChild(createCartItemElement(obj));
  saveCartItems();
};

 const addShoppingCart = async () => {
    await showItens();
    const button = document.getElementsByClassName('item__add');
    for (index = 0; index < button.length; index += 1) {
      button[index].addEventListener('click', getElement);
    }
};

const loadStorage = () => {
 getSavedCartItems();
 const cart = document.getElementsByClassName('cart__items')[0];
 for (index = 0; index < cart.childElementCount; index += 1) {
   cart.children[index].addEventListener('click', cartItemClickListener);
 }
};

const emptyCart = () => {
  localStorage.clear();
  carrinho.innerText = '';
  prices = [];
  calculatePrice();
};

addShoppingCart();
loadStorage();
const botao = document.getElementsByClassName('empty-cart')[0];
botao.addEventListener('click', emptyCart);

window.onload = () => { loadStorage(); };