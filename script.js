const items = document.querySelector('.items');
const itemLocal = '.cart__items';
const itemStorage = document.querySelector(itemLocal).innerHTML;
const animationLoad = document.createElement('span');

const sumPrices = () => {
  let sum = 0;
  const total = document.querySelector('.total-price');
  const arrayList = document.querySelectorAll('li');
  arrayList.forEach((element) => {
    sum += parseFloat(element.innerHTML.split('$')[1] * 100);
  });
  total.innerHTML = sum / 100;
};

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  const olHtml = document.querySelector(itemLocal).innerHTML;
  saveCartItems(olHtml);
  sumPrices();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = async () => {
  animationLoad.innerHTML = 'carregando...';
  animationLoad.className = 'loading';
  document.querySelector('.items').appendChild(animationLoad);
  const metaD = await fetchProducts('computador');
  document.querySelector('.loading').remove();
  const arrayProducts = metaD.results;
  arrayProducts.forEach((element) => {
  const elemento = createProductItemElement(element);
  items.appendChild(elemento);
  });
};

const addCarrinho = (data) => {
  const carrinho = document.querySelector(itemLocal);
  const prodCarrinho = createCartItemElement(data);
  prodCarrinho.addEventListener('click', cartItemClickListener);
  carrinho.appendChild(prodCarrinho);
};

const RemoveItemSum = () => {
  items.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const elemento = getSkuFromProductItem(event.target.parentNode);
      fetchItem(elemento).then((data) => {
        addCarrinho(data);
        saveCartItems(itemStorage);
        sumPrices();
      });  
    }
  });
};

const addStorage = () => {
  const ol = document.querySelector('ol');
  ol.innerHTML = getSavedCartItems();
  document.querySelectorAll('li').forEach((index) => {
  index.addEventListener('click', cartItemClickListener);
  });
};

document.querySelector('.empty-cart').addEventListener('click', () => {
  localStorage.clear();
  document.querySelector('ol').innerHTML = '';
});

window.onload = () => { createProductList(); RemoveItemSum(); addStorage(); };
