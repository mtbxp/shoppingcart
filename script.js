// const { fetchItem } = require("./helpers/fetchItem");
// const saveCartItems = require("./helpers/saveCartItems");

// const saveCartItems = require("./helpers/saveCartItems");

const cartItems = document.getElementsByClassName('cart__items')[0];
const tudo = document.getElementsByClassName('items')[0];

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
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const removeLoading = async () => {
  const carrega = document.querySelector('.loading');
    tudo.removeChild(carrega);
  };

const exibePagina = async () => {
  const coisas = document.querySelector('.items');
const pcs = await fetchProducts('computador');
pcs.results.forEach((element) => {
  coisas.appendChild(
    createProductItemElement({
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    }),
  );
});
removeLoading();
};

const getCart = async (itemCart) => {
  const takeFetch = await fetchItem(itemCart);
  const carrinho = {
    sku: takeFetch.id,
    name: takeFetch.title,
    salePrice: takeFetch.price,
  };
cartItems.appendChild(createCartItemElement(carrinho));
saveCartItems(cartItems.innerHTML);
};
const addCart = () => {
  document.addEventListener('click', (evento) => {
  if (evento.target.classList.contains('item__add')) {
  const adicionando = (evento.target.parentNode.firstChild.innerHTML);
  getCart(adicionando);
  }
  });
};
const clean = document.getElementsByClassName('empty-cart')[0];

const limpa = () => {
saveCartItems(cartItems.innerHTML = '');
};

const loading = async () => {
  const createElement = document.createElement('span');
  createElement.classList = 'loading';
  createElement.innerHTML = 'carregando...';
tudo.appendChild(createElement);
};

clean.addEventListener('click', limpa);
window.onload = async () => {
  exibePagina();
  addCart();
  loading();
  };
