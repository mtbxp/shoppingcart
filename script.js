const productSection = document.querySelector('.items');
const itemCart = document.querySelector('.cart__items');
const removeItemCart = document.querySelector('.empty-cart');
const classCart = document.querySelector('.cart');

const getLoading = async () => {
  const element = document.createElement('p');
  element.className = 'loading';
  element.innerText = 'carregando...';
  classCart.appendChild(element);
  await fetchProducts('computador');
  element.remove();
};

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
  const cartItem = document.querySelector('.cart__item');
  if (event.target.classList.contains('cart__item')) {
    cartItem.remove();
    saveCartItems(itemCart.innerHTML);
  }
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const products = () => {
  fetchProducts('computador')
    .then((element) => element.results
    .forEach((product) => productSection.appendChild(createProductItemElement(product))));
};

productSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const itemSection = event.target.parentNode;
    const idItem = getSkuFromProductItem(itemSection);
    fetchItem(idItem).then((product) => {
      itemCart.appendChild(createCartItemElement(product));

      saveCartItems(itemCart.innerHTML);
    }); 
  }
});

removeItemCart.addEventListener('click', () => {
  const listCompletd = document.querySelector('.cart__items');
   listCompletd.innerHTML = '';
});

const getLocalStorage = () => {
  itemCart.innerHTML = getSavedCartItems();
};

window.onload = () => { 
  products();
  getLocalStorage();
  getLoading();
};
