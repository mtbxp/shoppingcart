// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

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
  // coloque seu código aqui
  // Creio que aqui é a função para remover o produto do carrinho caso seja clicado.
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Dado o Id de um item, a função appenda um li com as infos do item no carrinho de compras. Preciso pensar em uma forma de encontrar o Id do item em que cliquei.

// Posso fazer um forEach em todos os botões dos elementos da lista. (classe item__add e querySelectorAll para gerar uma lista com todos eles).
// Adicionar um listener para o click nesses botões
// Caso haja o click, devo pegar o elemento pai do botão (será a section do item - .parentElement)
// O primeiro elemento filho da section tem innerText = sku (.firstElementChild)
// sku é o mesmo que id, então basta pegar o valor (element.value é uma ideia) e colocar na função abaixo.

async function insertCartItemWithId(id) {
  const productInfo = await fetchItem(id);
  const sku = productInfo.id;
  const name = productInfo.title;
  const salesPrice = productInfo.price;
  const li = createCartItemElement({ sku, name, salesPrice });
  const parentElement = document.querySelector('.cart__items');
  parentElement.appendChild(li);
}

async function insertProductElement() {
  const listResults = await fetchProducts('computador');
  listResults.forEach((item) => {
    const sku = item.id;
    const name = item.title;
    const image = item.thumbnail;
    const itemSection = createProductItemElement({ sku, name, image });
    const parentElement = document.querySelector('.items');
    parentElement.appendChild(itemSection);
    // console.log(itemSection.lastElementChild);
    itemSection.lastElementChild.addEventListener('click', () => {
      // console.log(itemSection.firstElementChild.innerText);
      const id = itemSection.firstElementChild.innerText;
      insertCartItemWithId(id);
    });
  });
}

insertProductElement();

// window.onload = insertCartItemWithClick;
