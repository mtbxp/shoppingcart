const createItems = document.querySelector('.items');
const cartItem = document.querySelector('.cart__items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItem.innerHTML);
};

// Adiciona Função para salvar no Local Storage
const loadCart = () => {
  cartItem.innerHTML = getSavedCartItems();
  cartItem.addEventListener('click', cartItemClickListener);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Adiciona itens ao carrinho
const addItems = async (itemId) => {
//   fetchItem(itemId)
//   .then((response) => cartItem
//   .appendChild(createCartItemElement(response)));
// };
  const fetch = await fetchItem(itemId);
  cartItem.appendChild(createCartItemElement(fetch));
  saveCartItems(cartItem.innerHTML);
  // console.log(fetch);
};

// Escutador Adicionar ao Carrinho

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('item__add')) {
    const item = e.target.parentElement;
    addItems(getSkuFromProductItem(item));
    // console.log(item);
  }
  });

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const listItems = async () => {
  // fetchProducts('computador')
  // .then((response) => response.results)
  // .then((items) => items.forEach((item) => createItems
  // .appendChild(createProductItemElement(item))));
  const fetchproducts = await fetchProducts('computador');
  const products = fetchproducts.results;
  products.forEach((product) => createItems.appendChild(createProductItemElement(product)));
};

window.onload = () => {
  listItems();
  loadCart();
 };
