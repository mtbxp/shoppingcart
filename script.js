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

const renderProducts = async () => {
  const items = document.querySelector('.items');
  const data = await fetchProducts('computador');
  data.results.forEach((product) => {
    const item = createProductItemElement(product);
    items.appendChild(item);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
   event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const renderCartItem = async (itemID) => {
  const cartItems = document.querySelector('.cart__items');
  const data = await fetchItem(itemID);
  cartItems.appendChild(createCartItemElement(data));
};

function addCartEvent() {
  const addBtn = document.querySelector('.items');
  addBtn.addEventListener('click', async (event) => {
    if (event.target.className === 'item__add') {
    const id = event.target.parentElement.firstChild.innerHTML;
    renderCartItem(id);
    }
  });
} 

window.onload = () => {
  renderProducts();
  addCartEvent();
};
