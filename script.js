const lista = [];

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => { // req 5
  // event.target.closest('li').remove(); caso eu estilize a ol/li
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => { // req4
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function addProductToCart(elementSku) {
  const element1 = await fetchItem(elementSku);
  const { id: sku, title: name, price: salePrice } = element1;
  const resultado = createCartItemElement({ sku, name, salePrice });
  const ol = document.getElementsByClassName('cart__items')[0];
  ol.appendChild(resultado);
}
// const buttonClearCart = document.getElementsByClassName('empty-cart');
// console.log(buttonClearCart);
// buttonClearCart.addEventListener('click', () => {
//   localStorage.clear();
//   const ol = document.getElementsByClassName('cart__items')[0];
//   ol.innerHTML = [];
// });

// Durante a realização do requisito 4, recebi orientações da colega Maria Clara Reis.
async function addButtonEvent(button) { // req4
  button.addEventListener('click', (event) => {
    const elementSku = getSkuFromProductItem(event.target.parentNode);
    console.log(elementSku);
    // const elementSku = event.target.parentNode.firstChild.innerText;
    addProductToCart(elementSku);    
    lista.push(elementSku);
    saveCartItems(lista);
    // console.log(lista);
     // buttonClearCart();
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
  const result = await fetchProducts(productName);
  const productsList = result.results.map(function (p) {
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
  // addBotao();
}

window.onload = () => { 
  loadProducts('computador'); 

  const textoSkusSalvas = getSavedCartItems();
  let skusSalvas = [];
  if (textoSkusSalvas !== null) {
    console.log(textoSkusSalvas);
   skusSalvas = textoSkusSalvas.split(',');    
  }   
   console.log(textoSkusSalvas);

  for (let index = 0; index < skusSalvas.length; index += 1) {
    addProductToCart(skusSalvas[index]);
    lista.push(skusSalvas[index]);
  }   
  };
