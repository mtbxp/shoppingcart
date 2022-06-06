// const { fetchItems } = require("./helpers/fetchItems");

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
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} |\nNAME: ${name} |\nPRICE: $${salePrice.toFixed(2)}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionarElementosNoHtml = async () => {
  const fetchProductsReturn = await fetchProducts('computador');
  fetchProductsReturn.results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    const section = createProductItemElement({ sku, name, image });
    const itemsSection = document.querySelectorAll('.items')[0];
    itemsSection.appendChild(section);
  });
  // console.log(fetchProductsReturn[0].id);
};
adicionarElementosNoHtml();

const adicionarAoCarrinho = async (event) => {
  const eTarget = event.target;
  if (eTarget.classList.contains('item__add')) {
    const itemSku = getSkuFromProductItem(eTarget.parentNode);
    const response = await fetchItem(itemSku);
    const { id: sku, title: name, price: salePrice } = response;
    const li = createCartItemElement({ sku, name, salePrice });
    const ol = document.querySelectorAll('.cart__items')[0];
    ol.appendChild(li);
  }
};

const buttonsAddEvent = () => {
const itemsSection = document.querySelectorAll('.items')[0];
itemsSection.addEventListener('click', adicionarAoCarrinho);
};
buttonsAddEvent();

const emptyCart = () => {
  const cart = document.querySelectorAll('.cart__items')[0];
  cart.innerHTML = '';
};
document.querySelectorAll('.empty-cart')[0].addEventListener('click', emptyCart);

window.onload = () => {
  // adicionarElementosNoHtml();
};
