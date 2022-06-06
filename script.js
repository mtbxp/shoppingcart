const sectionProduct = document.querySelector('.items');
const listCart = document.querySelector('.cart__items');
const sectionCart = document.querySelector('.cart');
const span = document.createElement('span');
const btnRemove = document.querySelector('.empty-cart');
let total = 0;

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

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  
  return li;
};

const insertTotal = () => {
  span.className = 'total-price';
  span.innerText = total;
  sectionCart.appendChild(span);
};

const getPrice = (price) => {
  total += parseFloat(price);
  insertTotal();
  return total;
};

const minusTotal = (event) => {
  const teste = event.target.innerText.split('$');
  total -= parseFloat(teste[1]);
  insertTotal();
};

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(listCart.innerHTML);
  minusTotal(event);
};
listCart.addEventListener('click', cartItemClickListener);

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
const eventList = (event) => {
  const productId = getSkuFromProductItem(event.target.parentNode);
  fetchItem(productId).then((item) => {
    getPrice(item.price);
    listCart.appendChild(createCartItemElement(item));
    saveCartItems(listCart.innerHTML);
  });
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  fetchProducts();
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', eventList);
  
  return section;
};

const getProduct = () => {
  fetchProducts('computador')
  .then((element) => element.results
  .forEach((product) => sectionProduct.appendChild(createProductItemElement(product)))); 
};

const getToLocal = () => {
const itensCart = getSavedCartItems();
listCart.innerHTML = itensCart;
};

const removeItemsCart = (event) => {
  listCart.innerHTML = '';
  cartItemClickListener(event);
  total = 0;
  insertTotal();
};

btnRemove.addEventListener('click', removeItemsCart);
getToLocal();

window.onload = () => {
  getProduct();
 };
