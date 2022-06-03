// const { fetchProducts } = require("./helpers/fetchProducts");

// const fetchProductsReturn = fetchProducts('computador');

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
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionarElementosNoHtml = async () => {
  const fetchProductsReturn = await fetchProducts('computador');
  fetchProductsReturn.forEach(({ id, title, thumbnail }) => {
    const section = createProductItemElement({ id, title, thumbnail });
    const itemsSection = document.querySelectorAll('.items')[0];
    itemsSection.appendChild(section);
  });
  // console.log(fetchProductsReturn[0].id);
};
adicionarElementosNoHtml();

window.onload = () => {
  adicionarElementosNoHtml();
};
