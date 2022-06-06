const sectionItems = document.querySelector('.items');
const olCartItems = document.querySelector('.cart__items');
const somandoItems = document.createElement('div');
const cart = document.querySelector('.cart');

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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// FEITO POR MIM
const cartItemClickListener = (event) => {
  const itemCart = document.querySelector('.cart__item');
  if (event.target.classList.contains('cart__item')) {
    itemCart.remove();
    saveCartItems(olCartItems.innerHTML);
  }
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// DAQUI PRA BAIXO É MEU CÓDIGO:

// Resgatando itens dela FetchAPI
const getProducts = () => {
  fetchProducts('computador').then((products) =>
  products.results.forEach((product) =>
  sectionItems.appendChild(createProductItemElement(product))));
};
//
let precoFinal = 0;

function somaPreco() {
  somandoItems.innerText = precoFinal;
  somandoItems.className = 'total-price';
  cart.appendChild(somandoItems);
}

function somaAuxiliar(arg) {
  precoFinal += parseFloat(arg);
  somaPreco();
  return precoFinal;
}

function subtracaoAuxiliar() {
  
}

// Evento de click que adiciona ao carrinho
sectionItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
  const sectionItem = event.target.parentElement;
  const idFound = getSkuFromProductItem(sectionItem);
  fetchItem(idFound).then((produto) => {
  somaAuxiliar(produto.price);
  olCartItems.appendChild(createCartItemElement(produto));
  saveCartItems(olCartItems.innerHTML);
});
}
});
// STORAGES
// função para adicionar items do carrinho ao localStorage

// função para resgatar items do carrinho
getProducts();

window.onload = () => { getProducts(); };
