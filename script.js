// const { fetchProducts } = require('./helpers/fetchProducts');

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

const createProductItemElement = ({ id: sku, title: xname, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', xname));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ id: sku, title: xname, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${xname} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// const separarEm3 = (parameter) => {
//   // Esta função deve pegar cada resultado e separar somente id, title e tumbnail.
//   const { id, title, tumbnail } = parameter;
//   const acharPai = document.querySelector('.items');
//   acharPai.appendChild(createProductItemElement({ id, title, tumbnail }));
// };

const fetchContinue = async (element) => {
  // Vou colocar aqui o Id, title e tumbnail, mas primeiro separar o result
  const { results } = await fetchProducts(element);
  const acharPai = document.querySelector('.items');
  // vou criar um forEach para fazer as sections
  results.forEach(((resultado) => {
    const { id, title, thumbnail } = resultado;
    // sku = id;
    // xname = title;
    // image = thumbnail;
    acharPai.appendChild(createProductItemElement({ id, title, thumbnail }));
  }));
};
// fetchContinue('computador').then((data) => console.log(data));
// Antes eu tava colocando no fetchContinue o sku, xname e image. Mas não é mais nescessário, deixei ai para ver a evolução

window.onload = () => {
  fetchContinue('computador');
};
