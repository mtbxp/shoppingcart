const sectionProduct = document.querySelector('.items');
const listCart = document.querySelector('.cart__items');

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
const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const eventList = (event) => {
  const productId = event.target.parentNode.firstChild.innerText;
  fetchItem(productId).then((item) => listCart.appendChild(createCartItemElement(item)));
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
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getProduct = () => {
  fetchProducts('computador')
  .then((element) => element.results
  .forEach((product) => sectionProduct.appendChild(createProductItemElement(product)))); 
};

window.onload = () => {
  getProduct();
 };
