// const { fetchProducts } = require('./helpers/fetchProducts');
// const { fetchItem } = require('./helpers/fetchItem');

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
  // li.addEventListener('click', cartItemClickListener);
  return li;
};

const addToCart = async ({ target }) => {
  const itemToBeFetched = target.parentNode.firstChild.innerText;
  const itemToBeAdded = await fetchItem(itemToBeFetched);
  const cartItems = document.getElementsByClassName('cart__items')[0];
  cartItems.appendChild(createCartItemElement(itemToBeAdded));
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = section.lastChild;
  button.addEventListener('click', addToCart);

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// const cartItemClickListener = (event) => {
//   event.target
// };

const itemsSection = document.getElementsByClassName('items')[0];

window.onload = () => {
  fetchProducts('computador')
    .then((data) => {
      data.results.forEach((element) => itemsSection
      .appendChild(createProductItemElement(element)));
    });
};
