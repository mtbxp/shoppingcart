const sectionItems = document.querySelector('.items');
const olCartItems = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
// const cart = document.querySelector('.cart');
const btnClear = document.querySelector('.empty-cart');

// codigo prepronto
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
// codigo prepronto
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
// codigo prepronto
const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};
// codigo prepronto
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// FEITO POR MIm
// function auxilSub(arg) {
//   const valorPraSubTratar = Number(arg.split('$')[1]);
//   return valorPraSubTratar;
// }

let precoFinal = 0;

function somaPreco(arg) {
  const numAprox = Math.round((precoFinal + arg) * 100) / 100;
  precoFinal = numAprox;
  totalPrice.innerText = numAprox;
  return totalPrice.innerText;
}

const cartItemClickListener = (event) => {
  const valorPraSubTratar = Number(event.target.innerText.split('$')[1]);
  somaPreco(-valorPraSubTratar);
  event.target.remove();
  saveCartItems(olCartItems.innerHTML);
  // }
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
  fetchProducts().then((products) =>
    products.results.forEach((product) =>
      sectionItems.appendChild(createProductItemElement(product))));
};
//

function getLocalStorage() {
  olCartItems.innerHTML = getSavedCartItems();
}

btnClear.addEventListener('click', () => {
  // remover itens do carrinho, limpar carrinho e conteúdo do preço
  olCartItems.innerHTML = '';
  // limpar innerHTML da section (elementos que constituem a lista de produtos) e o innerText do elemento que recebe o preço.
  totalPrice.innerText = '';
});

// Evento de click que adiciona ao carrinho
sectionItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const sectionItem = event.target.parentElement;
    const idFound = getSkuFromProductItem(sectionItem);
    fetchItem(idFound).then((produto) => {
      somaPreco(produto.price);
      olCartItems.appendChild(createCartItemElement(produto));
      saveCartItems(olCartItems.innerHTML);
    });
  }
});
// LOADING

// Criar o elemento de LOADING
// innerText = 'carregando...'
// className = 'loading'
// o elemento deve aparecer DURANTE a chamada da API

getProducts();

window.onload = () => { getProducts(); getLocalStorage(); };
