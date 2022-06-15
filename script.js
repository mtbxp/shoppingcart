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

const addProductItemElement = (element, parentElement) => {
  const parentSection = document.querySelector(parentElement);
  parentSection.appendChild(element);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const cartItemClickable = () => {
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  li.style.margin = '50px';
  cartItemClickable();
  return li;
};

const itemClickListener = async (event) => {
  const item = event.target.parentElement;
  const { id: sku, title: name, price: salePrice } = await fetchItem(getSkuFromProductItem(item));
  addProductItemElement(createCartItemElement({ sku, name, salePrice }), '.cart__items');
  console.log(sku, name, salePrice);
};

const itemClickable = () => {
  const product = document.querySelectorAll('.item button');
  product.forEach((item) => {
    item.addEventListener('click', itemClickListener);
  });
};

const startProductlist = async () => {
  const data = await fetchProducts('computador');
  const items = data.results;

  items.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    addProductItemElement(createProductItemElement({ sku, name, image }), '.items');
  });

  itemClickable(); 
};

window.onload = () => { startProductlist(); };
