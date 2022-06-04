const listProducts = document.querySelector('.items');

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

// console.log(createProductItemElement);

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

console.log(getSkuFromProductItem);

const cartItemClickListener = (event) => {
  console.log(event);
};
// cartItemClickListener('test');

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
console.log(createCartItemElement);

const allProducts = () => {
  fetchProducts('computador')
  .then((products) => products.results
  .forEach((product) => listProducts.appendChild(createProductItemElement(product))));
};

window.onload = () => {
  allProducts();
 };
