/* const { fetchProducts } = require("./helpers/fetchProducts"); */
const htmlSection = document.querySelector('.items');
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
  /*  console.log(image); */
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
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const getItem = async () => {
  const test = await fetchItem('MLB1615760527');
  const cartItem = {
    sku: test.id,
    name: test.title,
    salePrice: test.price,
  };
  createCartItemElement(cartItem);
};
getItem();
window.onload = async () => {
  const listItens = await fetchProducts('computador');
  /* console.log(listItens.map((e) => e.title)); */
  listItens.forEach((product) => {
    const item = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    };

    htmlSection.appendChild(createProductItemElement(item));
  });
};
