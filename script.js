const totalPrice = document.querySelector('.total-price');
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

// Somando os valores totais
// const sumValShop = async () => {
//   const arrayShop = Array.from(document.getElementsByClassName('cart__item'));
//   if (arrayShop.length === 0) {
//     totalPrice.innerHTML = `Total: $${0}`;
//   }
//   let result = 0;
//   arrayShop.forEach(async (elm) => {
//     const en = elm.innerHTML.split('|')[0].split(' ')[1];
//     const item = await fetchItem(en);
//     result += parseFloat(item.price, 10);
//     totalPrice.innerHTML = `Total: $${parseFloat(result, 10)}`;
//     localStorage.setItem('shopTot', result);
//   });
// };

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
  // await sumValShop();
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
 const captOl = document.querySelector('.cart__items').innerHTML;
  saveCartItems(captOl);
};

// função recuperar items do localStorage
const recLocalStorage = () => {
document.querySelector('.cart__items').innerHTML = getSavedCartItems();
document.querySelector('.cart__items').addEventListener('click', cartItemClickListener);
};

window.onload = async () => {
  listProdct();
  recLocalStorage();
  await serchMemori();
  await sumValShop();
};
