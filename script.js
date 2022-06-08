/* const { list } = require('mocha/lib/reporters/base'); */
const totPrice = document.querySelector('.total-price');
const listShop = document.querySelector('.cart__items');

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

// Deleta os elementos
const cartItemClickListener = (event) => {
  // Referência:https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
  listShop.removeChild(event.target);
  
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Adicinando ao carrinho
const putCart = async (elm) => {
  const idI = elm.target.parentNode.firstChild.innerText;
  const response = await fetchItem(idI);
  const itemsC = createCartItemElement(response);
  listShop.appendChild(itemsC);
  saveCartItems(JSON.stringify(itemsC.innerHTML));
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', putCart);
  return section;
};

// Criando lista de produtos
const listProdct = async () => {
  const divs = document.createElement('div');
  const prodct = document.querySelector('.items');

  divs.className = 'loading';
  divs.innerHTML = 'carregando...';
  prodct.appendChild(divs);
  
  const data = await fetchProducts('computador');
  const load = document.querySelector('.loading');
  load.remove();

  data.results.forEach((elm) => {
    const element = createProductItemElement(elm);
    prodct.appendChild(element);
  });
};

// Somando os valores totais!
const sumValShop = () => {
  if (listShop.length === 0) {
    totPrice.innerHTML = 'Total: $0';
  }
  let resp = 0;
  
  const arrShop = document.querySelectorAll('.cart__item');
  const totalVal = arrShop.forEach((val) => {
    resp += parseFloat(val.innerHTML.split('$')[7] * 100);
    return resp;
  });
  totPrice.innerHTML = `Total: $${totalVal / 100}`;
};

// Clear Buttom
const buttom = document.querySelector('.empty-cart');
buttom.addEventListener('click', () => {
  listShop.innerHTML = '';
  localStorage.clear();
});

// Carregando o localStorage
const serchMemori = () => {
  const response = JSON.parse(getSavedCartItems());
  listShop.innerHTML = response;
};

window.onload = () => {
  listProdct();
  serchMemori();
  sumValShop();
};
