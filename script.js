// Elementos HTML
const cartItemsUl = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const itemSection = document.querySelector('.items');
const clearBtn = document.querySelector('.empty-cart');

// Formata o valor total a pagar e exibe ele na tela.
function setTotalPrice(price) {
  if (price % 1 !== 0) {
    const dolars = String(price).split('.')[0];
    const cents = String(price).split('.')[1].substring(0, 2);
    totalPrice.innerText = `${dolars}.${cents}`;
  } else {
    totalPrice.innerText = `${price}`;
  }
}

// Calcula o valor total a pagar.
function calculateTotalPrice() {
  if (cartItemsUl.childElementCount > 0) {
    const allItems = [];
    // allItems recebe um array com o valor de todos os items.
    cartItemsUl.childNodes.forEach((child) =>
      allItems.push(Number(child.innerText.split('PRICE: $')[1])));
    const totalToPay = allItems.reduce((total, curr) => total + curr);
    setTotalPrice(totalToPay);
  } else {
    totalPrice.innerText = '0.00';
  }
}

// Cria imagens de itens da API.
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

// Cria elemnetos com classe e texto definidos de forma dinâmica.
const createCustomElement = (element, className, innerText) => {
  const elem = document.createElement(element);
  elem.className = className;
  elem.innerText = innerText;
  return elem;
};

// Cria containers de itens carregados pela API.
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  document.querySelector('.items').appendChild(section);
};

// Remove itens do carrinho ao serem clicados.
const cartItemClickRemove = (event) => {
  event.srcElement.remove();
  saveCartItems(cartItemsUl);
  calculateTotalPrice();
};

// Adiciona itens ao carrinho.
const createCartItemElement = ({ sku, name, salePrice }) => {
  const itemTxt = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = itemTxt;
  cartItemsUl.appendChild(li);
  li.addEventListener('click', cartItemClickRemove);
  saveCartItems(cartItemsUl);
  calculateTotalPrice();
};

// Formata as informações do itens a serem adicionados ao carrinho.
function fetchItemInfo(itemData) {
  const sku = itemData.id;
  const name = itemData.title;
  const salePrice = itemData.price;
  createCartItemElement({ sku, name, salePrice });
}

// Recebe as informações do item a ser adicionado ao carrinho.
async function fetchItemId(item) {
  // Recebe o texto (id) do segundo elemento filho, do pai do elemento clicado.
  const itemData = await fetchItem(item.path[1].firstChild.innerText);
  fetchItemInfo(itemData);
} 

// Adiciona escutadors aos itens da API.
function turnBuyButtonOn() {
  document.querySelectorAll('.item__add').forEach((element) => {
    element.addEventListener('click', fetchItemId);
  });
}

// Cria texto de loading.
function createLoading() {
  const h2Maker = document.createElement('h2');
  h2Maker.className = 'loading';
  h2Maker.innerText = 'carregando...';
  itemSection.appendChild(h2Maker);
}

// Remove texto de loading ou o altera em caso de erros.
function doneLoading(status) {
  if (status === 'loaded') {
    document.querySelector('.loading').remove();
  } else {
    document.querySelector('.loading').innerText = 'Ocorreu um erro no carregamento. :(';
  }
}

// Carrega itens da API.
async function loadProducts() {
  createLoading();
  try {
    const allProdructs = await fetchProducts('computador');
    allProdructs.results.forEach((product) => {
    const sku = product.id;
    const name = product.title;
    const image = product.thumbnail;
    createProductItemElement({ sku, name, image });
    });
    turnBuyButtonOn();
    doneLoading('loaded');
  } catch (err) {
    doneLoading('fail');
  }
}

// Adiciona escutadors após carregamento aos itens do carrinho criados de forma dinâmica.
function setClickEvent() {
  if (cartItemsUl.childElementCount > 0) {
    cartItemsUl.childNodes.forEach((child) =>
      child.addEventListener('click', cartItemClickRemove));
  }
}

function clearCart() {
  do {
    cartItemsUl.childNodes[0].remove();
  } while (cartItemsUl.childElementCount > 0);
  saveCartItems(cartItemsUl);
  calculateTotalPrice();
}

// Executa funções ao carregar a página.
window.onload = () => { 
  loadProducts();
  getSavedCartItems('cartItems');
  setClickEvent();
  calculateTotalPrice();
  clearBtn.addEventListener('click', clearCart);
};
