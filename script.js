/* eslint-disable sonarjs/no-duplicate-string */
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

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('.item__sku');

const cartItemClickListener = ({ target }) => {
  const naoEtarget = target;
  naoEtarget.innerHTML = '';
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// functions adicionais

// fecth nos produtos
const SearchProducts = async () => {
  // chama
  const produtos = await fetchProducts('computador');
  // destroi
  const { results } = produtos;
  return results;
};

// fetch nos cards do carrinho
const SearchItems = async (id) => {
  // chama
  const items = await fetchItem(id);
  return items;
};

// renderiza produtos no shopcard
const renderCartItemElement = async (id) => {
  // cria os elementos 
  const item = await SearchItems(id);
  const createCard = createCartItemElement(item);
  // chama a section
  const sectionItems = document.querySelector('.cart__items');
  // adicia o elemento
  sectionItems.appendChild(createCard);
  console.log('render', item);
};

// adiciona produtos ao shopcard
const addShopCard = ({ path }) => {
  // pega o id do prduto
  const id = getSkuFromProductItem(path[1]).innerText;
  // renderiza no carrinho
  renderCartItemElement(id);
  console.log('add', id);
};

// renderiza produtos na tela principal
const renderProductItemElement = async () => {
  // chamo a section
  const sectionProducts = document.querySelector('.items');
  // chamo produtos
  const products = await SearchProducts();
  // renderizo cada item na tela
  products.map((product) => {
    // crio o card
    const cardProducts = createProductItemElement(product);
    // add evento
    cardProducts.addEventListener('click', addShopCard);
    // renderizo
    return sectionProducts.appendChild(cardProducts);
  });
};

window.onload = () => {
  SearchProducts();
  renderProductItemElement();
};