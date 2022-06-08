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
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createListProductItems = async () => {
  const data = await fetchProducts('computador');
  const classItems = document.querySelector('.items');
  data.forEach((listProducts) => classItems.appendChild(createProductItemElement(listProducts)));
};

const addToCart = async (itemSku) => {
  const obj = await fetchItem(itemSku);
  const listToCart = document.querySelector('.cart__items');
  listToCart.appendChild(createCartItemElement(obj));
};

const getButtons = async () => {
  const getBtn = document.querySelectorAll('.item__add');
  getBtn.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentElement;
    addToCart(getSkuFromProductItem(parent));
  }));
};

window.onload = async () => { 
  await createListProductItems(); 
  getButtons();
};
