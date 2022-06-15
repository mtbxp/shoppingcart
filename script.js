let listaDeSkus = [];
let listaDePrices = [];
let subtotal = 0;

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

function round(num) {
  const m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

function updateSubtotalText() {
  subtotal = listaDePrices.reduce((acc, price) => acc + price, 0);
  const rounded = round(subtotal);

  const total = document.getElementsByClassName('total-price')[0];
  total.textContent = `${rounded}`;
}

const cartItemClickListener = (event) => { // req 5
  const myIndex = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
  event.target.remove();

  listaDeSkus.splice(myIndex, 1);
  saveCartItems(listaDeSkus);

  listaDePrices.splice(myIndex, 1);
  updateSubtotalText();
};

const createCartItemElement = ({ sku, name, salePrice }) => { // req4
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// Durante a realização do requisito 4, recebi orientações da colega Maria Clara Reis acerca da desestruturação do objeto retornado da API.
async function addProductToCart(elementSku) {
  const element = await fetchItem(elementSku);
  const { id: sku, title: name, price: salePrice } = element;
  const resultado = createCartItemElement({ sku, name, salePrice });
  const ol = document.getElementsByClassName('cart__items')[0];
  ol.appendChild(resultado);
  
  listaDePrices.push(salePrice);
  updateSubtotalText();  
}

function addEventToButtonClearCart() {
 const botaoLimpar = document.getElementsByClassName('empty-cart')[0];
 botaoLimpar.addEventListener('click', () => {
    listaDeSkus = [];
    listaDePrices = []; 
    updateSubtotalText();
    localStorage.clear();
    const ol = document.getElementsByClassName('cart__items')[0];
    ol.innerHTML = '';
 });
}


function addButtonEvent(button) { // req4
  button.addEventListener('click', async (event) => {
    const elementSku = getSkuFromProductItem(event.target.parentNode);
    await addProductToCart(elementSku);    
    listaDeSkus.push(elementSku);
    saveCartItems(listaDeSkus);
  });
}

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

  const botao = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(botao);
  addButtonEvent(botao);

  return section;
}; 
// req1
async function loadProducts(productName) {
  const request = await fetchProducts(productName);
  const productsList = request.results.map(function (p) {
    return {
      sku: p.id,
      name: p.title,
      image: p.thumbnail,
    };
  });
  productsList.forEach((product) => {
    const resultSection = createProductItemElement(product);
    const sectionsElement = document.getElementsByClassName('items')[0];
    sectionsElement.appendChild(resultSection);
  });
  }

window.onload = async () => { 
  loadProducts('computador'); addEventToButtonClearCart();

  const textoSkusSalvas = getSavedCartItems();
  let skusSalvas = [];
  if (textoSkusSalvas !== null && textoSkusSalvas !== '') {
   skusSalvas = textoSkusSalvas.split(',');    
  }

  for (let index = 0; index < skusSalvas.length; index += 1) {
    addProductToCart(skusSalvas[index]);
    listaDeSkus.push(skusSalvas[index]);
  }
  };
