// const { fetchItem } = require("./helpers/fetchItem");

const listProducts = document.querySelector('.items');
const sectionChart = document.querySelector('.cart__items');

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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
console.log(getSkuFromProductItem);

const cartItemClickListener = (event) => { 
  const itemChart = event.target;
  itemChart.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const fetchId = async (event) => {
  const id = event.target.parentNode.firstChild.innerText;
  const product = await fetchItem(id);
  const item = createCartItemElement(product);
  sectionChart.appendChild(item);
  };

const allProducts = async () => {
  await fetchProducts('computador')
  .then((products) => products.results
  .forEach((product) => {
    const sectionCreate = createProductItemElement(product);
    sectionCreate.lastChild.addEventListener('click', fetchId);
    listProducts.appendChild(sectionCreate);
  }));
};

window.onload = () => {
  allProducts();
};
