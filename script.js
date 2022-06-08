/* eslint-disable no-loop-func */
// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

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

// const usaId = async (el) => {
//   const data = await fetchItem(el);
//   const { id, title, price } = data;
//   createCartItemElement({ id, title, price });
// };

const AdicionaCarrinho = async () => {
  const lista = document.getElementsByClassName('cart__items');
  const products = document.getElementsByClassName('item');
  for (let i = 0; i < products.length; i += 1) {
    products[i].addEventListener('click', async (e) => {
      const alvo = e.target;
      const idSelecionado = alvo.parentNode.firstChild.innerText;
      const dados = await fetchItem(idSelecionado);
      const { id, title, price } = dados;
      const produto = createCartItemElement({ sku: id, name: title, salePrice: price });
      lista[0].appendChild(produto);
    });
  }
};

const Start = async () => {
  const items = document.getElementsByClassName('items');
  const data = await fetchProducts('computador');
  const array = await data;
  array.forEach((e) => {
    const { id, title, thumbnail } = e;
    const produto = createProductItemElement({ sku: id, name: title, image: thumbnail });
    items[0].appendChild(produto);
  });
  AdicionaCarrinho();
};

window.onload = () => {
  Start();
};
