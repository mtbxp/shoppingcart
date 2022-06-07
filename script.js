const cartList = document.querySelector('.cart__items');
const listaDeItens = document.querySelector('.items');

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

// acessar o pai para ver o parametro

const cartItemClickListener = (event) => {
  event.target.remove();
  const listaHTML = document.querySelector(cartList).innerHTML;
};
// chamar fetchitens e passa o parametro para a função para gerar a li e acessar o pai para ver o parametro

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const EventOnItem = (event) => {
  const sku = getSkuFromProductItem(event.target.parentNode);
  fetchItem(sku).then((item) => {
    cartList.appendChild(createCartItemElement(item));
  });
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', EventOnItem);

  return section;
};

const createProductList = async () => {
  const fetch = await fetchProducts('computador');
  const fetchProduct = fetch.results;
  fetchProduct.forEach((element) => {
    const item = createProductItemElement(element);
    listaDeItens.appendChild(item);
  });
};

window.onload = () => { 
  createProductList();
};
