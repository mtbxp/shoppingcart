const olCartItems = document.querySelector('.cart__items');

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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

async function totalSellingPrice(moneyDeposit, moneyOut) {  // falta complementar funcioanmento da funcao e fazer a retirada de valor do calculo
  const depositAwait = await moneyDeposit;
  const p = document.createElement('p');
  console.log(p.innerText);
  p.className = 'total-price';
  if (!p.innerText) {
    let balance = 0;
  }
  if (!moneyOut) {
    balance += depositAwait;
  } else {
    balance -= moneyOut;
  }
  p.innerText = balance;
  olCartItems.appendChild(p);
}

const convertStrToNumber = (value) => {
  const money = value.slice(value.indexOf('$') + 1);
  const moneyConvert = parseFloat(money);
  return moneyConvert;
};

const cartItemClickListener = (event) => {
  // const findSold = event.target.innerHTML; // calculo para remover numero
  // const moneyOut = findSold.slice(findSold.indexOf('$') + 1); // calculo para remover numero
  // console.log(moneyOut); // calculo para remover numero
  // const moneyOutNUmber = parseInt(moneyOut); // calculo para remover numero
  // totalSellingPrice(0, moneyOut); // calculo para remover numero
  event.target.remove();
  saveCartItems(olCartItems.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sendToCart = async (event) => {
  const ElementId = event.target.parentNode.firstChild.innerText;
  const product = await fetchItem(ElementId);
  const InfoToCart = createCartItemElement(product);
  const moneyDeposit = convertStrToNumber(InfoToCart.innerHTML);
  totalSellingPrice(moneyDeposit, 0);
  // console.log(InfoToCart.innerHTML); //numero a ser somado
  olCartItems.appendChild(InfoToCart);
  saveCartItems(olCartItems.innerHTML);
};

const fetchProductsToCreateProducts = async () => {
  const data = await fetchProducts('computador');
  data.results.forEach((curr) => {
    const sectionDad = document.querySelector('.items');
    sectionDad.addEventListener('click', sendToCart);
    sectionDad.appendChild(createProductItemElement(curr));
  });
};

const clearCartItem = () => {
  const btnClear = document.querySelector('.empty-cart');
  btnClear.addEventListener('click', () => {
    olCartItems.innerHTML = '';
  });
};
clearCartItem();

function start() {
  fetchProductsToCreateProducts();
  getSavedCartItems();
  const li = document.querySelectorAll('.cart__item');
  li.forEach((element) => element.addEventListener('click', cartItemClickListener));
}

window.onload = () => { start(); };
