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
  document.querySelector('.items').appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  document.querySelector('.cart__items').appendChild(li);
  li.addEventListener('click', cartItemClickListener);
};

function fetchItemInfo(itemData) {
  const sku = itemData.id;
  const name = itemData.title;
  const salePrice = itemData.price;
  createCartItemElement({ sku, name, salePrice });
}

async function fetchItemId(item) {
  // Recebe o texto (id) do segundo elemento filho, do pai do elemento clicado.
  const itemData = await fetchItem(item.path[1].firstChild.innerText);
  fetchItemInfo(itemData);
} 

function turnBuyButtonOn() {
  document.querySelectorAll('.item__add').forEach((element) => {
    element.addEventListener('click', fetchItemId);
  });
}

async function loadProducts() {
  const allProdructs = await fetchProducts('computador');
  allProdructs.results.forEach((product) => {
    const sku = product.id;
    const name = product.title;
    const image = product.thumbnail;
    createProductItemElement({ sku, name, image });
  });
  turnBuyButtonOn();
}

window.onload = () => { 
  loadProducts();
};
