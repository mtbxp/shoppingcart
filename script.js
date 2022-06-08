/* const { list } = require('mocha/lib/reporters/base'); */
const totPrice = document.querySelector('.total-price');
totPrice.innerHTML = `Total: $${0}`;
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

/* const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText; */

// Somando os valores totais!
const sumValShop = async () => {
  const arrayShop = Array.from(document.getElementsByClassName('cart__item'));
  if (arrayShop.length === 0) {
    totPrice.innerHTML = `Total: $${0}`; 
  }
  let resp = 0;
  arrayShop.forEach(async (elm) => {
    const en = elm.innerHTML.split('|')[0].split(' ')[1];
    const item = await fetchItem(en);
    resp += parseFloat(item.price, 10);
    totPrice.innerHTML = `Total: $${parseFloat(resp, 10)}`;
    localStorage.setItem('shopTot', resp);
  });
};

// Deleta os elementos
const cartItemClickListener = (event) => {
  // Referência:https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
  listShop.removeChild(event.target);
  localStorage.clear();
};

// Cria o item do carrinho
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
  saveCartItems(JSON.stringify(idI));
  await sumValShop();
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
  // requisito 11 carregando...
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

// Clear Buttom
const buttom = document.querySelector('.empty-cart');
buttom.addEventListener('click', () => {
  listShop.innerHTML = '';
  localStorage.clear();
  totPrice.innerHTML = `Total: $${0}`;
});

// Carregando o localStorage
const serchMemori = async () => {
  const response = JSON.parse(getSavedCartItems());
  const res = await fetchItem(response);
  const items = createCartItemElement(res);
  listShop.appendChild(items);

  const valShop = localStorage.getItem('shopTot');
  totPrice.innerHTML = `Total: $${valShop}`;
};
serchMemori();

window.onload = () => {
  listProdct();
};
