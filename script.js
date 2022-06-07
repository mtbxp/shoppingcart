// const { fetchItem } = require("./helpers/fetchItem");

// const saveCartItems = require("./helpers/saveCartItems");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const { fetchProducts } = require("./helpers/fetchProducts");
const ol = document.querySelector('.cart__items');

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
  saveCartItems(ol.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
};

ol.addEventListener('click', cartItemClickListener);

const adicionarLocalStorage = () => {
  li.innerHTML = getSavedCartItems();
};
const criaListaItem = (paramItemPai) => {
  fetchItem(paramItemPai).then((paramItem) => {
    ol.appendChild(createCartItemElement(paramItem));
    saveCartItems(ol.innerHTML);
  });
};
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const itemPai = event.target.parentNode.firstChild.innerText;
    criaListaItem(itemPai);
  }
});

  const adicionarProdutosPratileira = async (tipoItem) => {
    const pratileiraDeItems = document.querySelector('.items');
    const arrayDeProdutos = (await fetchProducts(tipoItem)).results;
    arrayDeProdutos.forEach((eachProduto) => {
      const { id, title, thumbnail } = eachProduto;
      const objetoContendoProduto = createProductItemElement({ id, title, thumbnail });
      pratileiraDeItems.appendChild(objetoContendoProduto);
    });
  };

  const pagina = async () => {
    const load = document.createElement('p');
    load.className = 'loading';
    load.innerText = 'carregando...';
    sectionItens.appendChild(load);
  };

window.onload = () => {
  adicionarProdutosPratileira('computador');
  adicionarLocalStorage();
};
