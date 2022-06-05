const itemProduct = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const cartItem = document.querySelector('.cart__item');

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

const createProduct = () => {
  fetchProducts('computador')
  .then((element) => element.results
  .forEach((e) => itemProduct.appendChild(createProductItemElement(e))));
};
createProduct();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const selected = event.target;
  selected.parentNode.removeChild(selected);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const itemsCart = (element) => {
  fetchItem(element) 
  .then((el) => cartItems.appendChild(createCartItemElement(el)))
};

document.addEventListener('click', async (event) => {
  if(event.target.classList.contains('item__add')) {
   const idElement = event.target.parentNode.firstChild.innerText;
   await itemsCart(idElement);
  }
});

window.onload = () => {
  fetchProducts();
 };
