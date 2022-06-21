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
  localStorage.removeItem(event.target);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function addToCart(event) {
  const clickedItem = await fetchItem(event.target.id);
  const li = createCartItemElement(clickedItem);
  document.querySelector('.cart__items').appendChild(li);
  saveCartItems(clickedItem);
  // li.addEventListener('click', cartItemClickListener);
}

function addingIdsInAddToCartButtons(products) {
  const buttons = Array.from(document.getElementsByClassName('item__add'));
  products.forEach((product, indice) => { 
    buttons[indice].id = product.id;
  });
}

const emptyCart = () => {
  const cart = document.querySelector('.cart__items');
  cart.innerHTML = '';
};

function addingEventListenerInAddToCartButtons() {
  // Objetos array-like são retornados de muitos métodos DOM nativos como getElementsByClassName(),por isso foi necessário usar o método 'Array.from' para convertê-lo em um array.
  Array.from(document.getElementsByClassName('item__add'))
  .forEach((button) => button.addEventListener('click', addToCart)); 
}

function appendItemsInSection(products) {
  const itemSection = document.querySelector('.items');
  products.forEach((product) => {
    itemSection.appendChild(createProductItemElement(product));
  });
}

window.onload = async () => {
  const data = await fetchProducts('computador');
  const products = data.results;
  appendItemsInSection(products);
  addingEventListenerInAddToCartButtons();
  addingIdsInAddToCartButtons(products);
  const buttonEmptyCart = document.querySelector('.empty-cart');
  buttonEmptyCart.addEventListener('click', emptyCart);
};
