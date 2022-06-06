// const { fetchProducts } = require("./helpers/fetchProducts");

// const { fetchItem } = require("./helpers/fetchItem");

const resultsComputador = async () => {
  const mostraCertinho = await fetchProducts('computador');
  return mostraCertinho;  
};

const classItems = document.querySelector('.items');
const classCartItems = document.querySelector('.cart__items');

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
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  return { event.target.id, event.target.title, event.target.price};
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const arrayCerta = async () => { 
  const teste = await resultsComputador();
  teste.forEach((element) => {
    createProductItemElement({ sku: element.id, name: element.title, image: element.thumbnail });
    classItems.appendChild(
      createProductItemElement({ sku: element.id, name: element.title, image: element.thumbnail }),
      );
  });
};

arrayCerta();

const addToCart = async (id) => {
  const constF = await fetchItem(id);
  constF.forEach((element) => {
    createCartItemElement({ sky: element.id, name: element.title, salePrice: element.price });
    classCartItems.appendChild(
      createCartItemElement({ sky: element.id, name: element.title, salePrice: element.price }),
    );
  });
};

window.onload = () => { };
