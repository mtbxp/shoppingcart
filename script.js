const classItems = document.querySelector('.items');
const cartItem = document.querySelector('.cart__items');

async function loadText() {
  const h2 = document.createElement('h2');
  h2.innerText = 'carregando...';
  h2.className = 'loading';
  document.querySelector('.items').appendChild(h2);
  await fetchProducts('computador');
  h2.remove();
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

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const getSkuFromProductItem = async (item) => {
  const id = item.querySelector('span.item__sku').innerText;
  const functionFetchItem = await fetchItem(id);
  cartItem.appendChild(createCartItemElement(functionFetchItem));
  saveCartItems(cartItem.innerHTML);
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  
  const btn = createCustomElement(
    'button',
    'item__add',
    'Adicionar ao carrinho!',
    );
    btn.addEventListener('click', (event) => {
    getSkuFromProductItem(event.target.parentNode);
  });
  section.appendChild(btn);
  return section;
};

function listProducts() {
  fetchProducts('computador').then((element) =>
    element.results.forEach((object) =>
      classItems.appendChild(createProductItemElement(object))));
}
listProducts();

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItem.innerHTML);
};

cartItem.addEventListener('click', cartItemClickListener);

const btnEmptyCart = document.querySelector('.empty-cart');
function clearCart() {
  cartItem.innerHTML = '';
}
btnEmptyCart.addEventListener('click', clearCart);

function loadElements() {
cartItem.innerHTML = getSavedCartItems();
}
window.onload = () => { loadText(); loadElements(); };
