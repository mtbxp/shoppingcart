const itemSection = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

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

const cartItemClickListener = (e) => {
  e.target.remove();
};

const reloadCartItemListener = () => {
  cartItems.addEventListener('click', cartItemClickListener);
  cartItems.innerHTML = getSavedCartItems();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const buttonItemClickListener = async (e) => {
  const itemID = e.target.parentNode.firstChild.innerText;
  const item = await fetchItem(itemID);
  cartItems.appendChild(createCartItemElement(item));
  saveCartItems(cartItems.innerHTML);
};

const createProductItemElement = (sku, name, image) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', buttonItemClickListener);

  return section;
};

const showItems = async () => {
  const productsInfo = await fetchProducts('computador');
  await productsInfo.forEach(({ id, title, thumbnail }) =>
    itemSection.appendChild(createProductItemElement(id, title, thumbnail)));
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => { 
  showItems();
  reloadCartItemListener();
};
