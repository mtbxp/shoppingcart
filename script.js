// const { fetchProducts } = require("./helpers/fetchProducts");

// VARIÁVEIS DO DOM
const productsList = document.querySelector('.items');
const cartList = document.querySelector('.cart__items');
const priceTag = document.querySelector('.total-price');
const clearButton = document.querySelector('.empty-cart');

// FUNÇÃO QUE CALCULA O PREÇO
const calculatePrice = () => {
  const prices = cartList.innerText.split('\n');
  if (!prices[0]) {
    priceTag.innerText = '0.00';
  } else {
   priceTag.innerText = prices.reduce((acc, item) => acc + Number(item.split('$')[1]), 0);
  }
};

// FUNÇÃO QUE LIMPA A LISTA DO CARRINHO
clearButton.addEventListener('click', () => {
  cartList.innerHTML = '';
  saveCartItems(cartList.innerHTML);
  calculatePrice();
});

// FUNÇÃO QUE APAGA O ITEM DA LISTA QUANDO SELECIONADO
const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartList.innerHTML);
  calculatePrice();
};

// FUNÇÃO QUE MONTA A DESCRIÇÃO DO ITEM NA LISTA DE COMPRAS
const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

//  FUNÇÃO QUE ADICIONA O ITEM AO CARRINHO
const addItemToCart = (event) => {
  const productId = event.target.parentNode.firstChild.innerText;
  fetchItem(productId).then((product) => {
    cartList.appendChild(createCartItemElement(product));
    saveCartItems(cartList.innerHTML);
    calculatePrice();
  });
};

//  FUNÇÃO QUE CRIA A IMAGEM DO PRODUTO NO MOSTRUÁRIO
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

//  FUNÇÃO QUE CRIA A DESCRIÇÃO DO PRODUTO NO MOSTRUÁRIO
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// FUNÇÃO QUE MONTA A EXIBIÇÃO DO ITEM NO MOSTRUÁRIO
const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  fetchProducts();
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', addItemToCart);
  return section;
};

// FUNÇÃO QUE CHAMA A API (e mostra 'carregando');
const createProductList = async () => {
  const loadMessage = document.createElement('p');
  loadMessage.className = 'loading';
  loadMessage.innerText = 'carregando...';
  productsList.appendChild(loadMessage);
  const productsData = await fetchProducts('computador').then((list) => list.results);
  productsList.firstChild.remove();
  await productsData.forEach((product) => {
      productsList.appendChild(createProductItemElement(product));
    });
};

//  FUNÇÃO QUE RECUPERA A LISTA SALVA
const recoverData = () => {
  cartList.innerHTML = getSavedCartItems();
  cartList.addEventListener('click', cartItemClickListener);//  como a lista está sendo criada novamente, cada item precisa ter o 'escutador'
  calculatePrice();
};

window.onload = () => { 
  createProductList();
  recoverData();
  alert('Que bom ter você de volta! Que tal continuar as compras?');
};
