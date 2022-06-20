const items = document.querySelector('.items');
const shoppingCartList = document.querySelector('.cart__items');

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

const createProductList = async () => {
  const products = await fetchProducts('computador');
  products.results.forEach((product) => items.appendChild(createProductItemElement(product)));
  };

const cartItemClickListener = (event) => {
  shoppingCartList.removeChild(event.target);
};
//  saveCartItems(createProductList.innerHTML);
//shoppingCartList.addEventListener('click', cartItemClickListener);

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemToShoppingCart = async (event) => {
  const itemId = event.target.parentElement.firstElementChild.innerText;
  const item = await fetchItem(itemId);
  shoppingCartList.appendChild(createCartItemElement(item));
};

const addListenerToBtn = async () => {
  await createProductList();
  const addBtn = document.querySelectorAll('.item__add');
  addBtn.forEach((button) => button.addEventListener('click', addItemToShoppingCart));
};

window.onload = () => { 
  addListenerToBtn(); 
};
