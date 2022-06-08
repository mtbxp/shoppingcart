// const { fetchProducts } = require('./helpers/fetchProducts');

// const saveCartItems = require("./helpers/saveCartItems");

// const { fetchItem } = require("./helpers/fetchItem");
let valorTotal = 0;

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
  const preçoTotal = document.getElementById('total');
  const alvo = event.target;
  alvo.remove();
  const infos = alvo.innerHTML;
  const sep = infos.split('$');
  const valorClicado = parseFloat(sep[1]);
  if (valorClicado > valorTotal) {
    preçoTotal.innerHTML = 0;
  } else {
    valorTotal -= valorClicado;
    preçoTotal.innerHTML = valorTotal;
  }
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionaOLocalStorage = () => {
  const preçoTotal = document.getElementById('total');
  const carrinho = document.getElementsByClassName('cart__items');
  const obj = getSavedCartItems();
  if (obj === null) {
    console.log(undefined);
  } else {
  const produto = createCartItemElement(obj);
  carrinho[0].appendChild(produto);
  const valor = obj.salePrice;
  valorTotal += valor;
  preçoTotal.innerHTML = Math.round(valorTotal, 2);
  }
};

const colocaCarrinho = async (e) => {
  const preçoTotal = document.getElementById('total');
  const lista = document.getElementsByClassName('cart__items');
  const alvo = e.target;
  const idSelecionado = alvo.parentNode.firstChild.innerText;
  const dados = await fetchItem(idSelecionado);
  const { id, title, price } = dados;
  const produto = createCartItemElement({ sku: id, name: title, salePrice: price });
  lista[0].appendChild(produto);
  saveCartItems({ sku: id, name: title, salePrice: price });
  const valor = parseFloat(price);
  valorTotal += valor;
  preçoTotal.innerHTML = valorTotal;
};

const AdicionaCarrinho = async () => {
  const products = document.getElementsByClassName('item__add');
  for (let i = 0; i < products.length; i += 1) {
    products[i].addEventListener('click', async (e) => {
      await colocaCarrinho(e);
    });
  }
};

const limpaCarrinho = () => {
  const limpador = document.getElementsByClassName('empty-cart');
  const carrinho = document.getElementsByClassName('cart__items');
  limpador[0].addEventListener('click', () => {
    carrinho[0].innerHTML = ' ';
    localStorage.clear();
  });
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
  limpaCarrinho();
  adicionaOLocalStorage();
};

window.onload = () => {
  Start();
};
