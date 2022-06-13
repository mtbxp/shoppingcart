const olList = document.querySelector('.cart__items');
const buttonCart = document.querySelector('.empty-cart');

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
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const clearCart = () => {
  const liList = document.querySelectorAll('.cart__item');
  buttonCart.addEventListener('click', () => {
    liList.forEach((e) => {
      e.remove();
    });
  });
};

const getCartItemElement = () => {
  const buttonsAdd = document.querySelectorAll('.item__add');
  buttonsAdd.forEach((button) => {
    button.addEventListener('click', async () => {
      const itemId = getSkuFromProductItem(button.parentElement); 
      const itemValues = await fetchItem(itemId);
      const itemSelected = await createCartItemElement(itemValues);
      olList.appendChild(itemSelected);
      clearCart();
    });
  });
};

const loadingText = () => {
  const ITEMS = document.querySelector('.items');
  const loading = document.createElement('p');
  loading.innerText = 'Carregando...';
  loading.className = 'loading';
  ITEMS.appendChild(loading);
};

const start = async () => {
  loadingText();

  const { results } = await fetchProducts('computador');
  const ITEMS = document.querySelector('.items');
  const loading = document.querySelectorAll('p');

  results.forEach((e) => ITEMS.appendChild(createProductItemElement(e)));
  loading.forEach((e) => e.remove());
};

window.onload = async () => {
  await start();
  getCartItemElement();
};
