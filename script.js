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

const itemsContainer = document.querySelector('.items');
const cartContainer = document.querySelector('.cart__items');

const cartItemClickListener = (event) => {
  const item = event.target.closest('.cart__item');
  if (!item) return;
  item.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

function appendProducts(obj) {
  obj.results.forEach((item) => {
    itemsContainer.append(createProductItemElement(item));
  });
  return itemsContainer;
}

function getProduct(event) {
  const target = event.target.closest('.item__add');
  if (!target) return;
  const item = target.parentElement;
  return item;
}

function appendProductInCart(obj) {
  cartContainer.append(createCartItemElement(obj));
  return cartContainer;
}

function editCart(event) {
  event.preventDefault();
  const item = getProduct(event);
  if (!item) return;
  const id = getSkuFromProductItem(item);
  fetchItem(id)
    .then((fetchedProduct) => appendProductInCart(fetchedProduct))
    .then((selectedItemsContainer) => console.log(selectedItemsContainer));
}

window.onload = () => {
  fetchProducts('computador')
    .then((fetchedProducts) => appendProducts(fetchedProducts))
    .then((products) => {
      products.addEventListener('click', editCart);
      console.log(products);
    });
};
