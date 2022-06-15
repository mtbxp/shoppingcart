const totalPrice = document.querySelector('.total-price');
const listShop = '.cart__items';

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

// Calculando valor total dos itens
const sumPrices = () => {
  let sum = 0;
  const total = document.querySelector('.total-price');
  const arrayList = document.querySelectorAll('li');
  arrayList.forEach((element) => {
    sum += parseFloat(element.innerHTML.split('$')[1] * 100);
  });
  // total.innerHTML = sum / 100;
  console.log(sum);
  console.log(total);
};

// Deleta os elementos
const cartItemClickListener = (event) => {
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
const putCart = async (elem) => {
  const idI = elem.target.parentNode.firstChild.innerText;
  const response = await fetchItem(idI);
  const itemsC = createCartItemElement(response);
  listShop.appendChild(itemsC);
  saveCartItems(idI);
  sumPrices();
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
  divs.innerHTML = 'carregando...';
  divs.className = 'loading';
  prodct.appendChild(divs);

  const data = await fetchProducts('computador');
  const load = document.querySelector('.loading');
  load.remove();
  data.results.forEach((elem) => {
    const element = createProductItemElement(elem);
    prodct.appendChild(element);
  });
};

// Criando Buttom
const buttom = document.querySelector('.empty-cart');
buttom.addEventListener('click', () => {
  listShop.innerHTML = '';
  localStorage.clear();
  totalPrice.innerHTML = `Total: $${0}`;
});

// Carregando no localStorage
const serchMemori = () => {
 const captOl = document.querySelector(listShop).innerHTML;
  saveCartItems(captOl);
};

// função recuperar items do localStorage
const recLocalStorage = () => {
document.querySelector(listShop).innerHTML = getSavedCartItems();
document.querySelector(listShop).addEventListener('click', cartItemClickListener);
};

window.onload = () => {
  listProdct();
  recLocalStorage();
  serchMemori();
  sumPrices();
};
