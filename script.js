const itemsContainer = document.querySelector('.items');
const cartContainer = document.querySelector('.cart__items');

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

function getTotalPrice(nodeContainer) {
  let total = 0;
  Object.values(nodeContainer.children).forEach((item) => {
    const index = item.textContent.indexOf('$');
    const price = item.textContent.slice(index + 1);
    total += +price;
    total = (Math.round(total * 100) / 100);
  });
  return total;
}

function renderTotalPrice(node) {
  const para = document.createElement('p');
  para.className = 'total-price';
  const totalPrice = getTotalPrice(node);
  para.textContent = totalPrice;
  const nodeParent = node.parentElement;
  if (nodeParent.children.length >= 3) {
    node.nextElementSibling.remove();
  }
  node.after(para);
}

const cartItemClickListener = (event) => {
  const item = event.target.closest('.cart__item');
  if (!item) return;
  item.remove();
  saveCartItems(cartContainer);
  renderTotalPrice(cartContainer);
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
  saveCartItems(cartContainer);
  renderTotalPrice(cartContainer);
  return cartContainer;
}

function renderItemInCart(id) {
  return fetchItem(id)
    .then(appendProductInCart);
}

function updateCart(nodeContainer) {
  nodeContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const item = getProduct(event);
    if (!item) return;
    const id = getSkuFromProductItem(item);
    renderItemInCart(id);
  });
}

function renderProducts() {
  return fetchProducts('computador')
    .then(appendProducts);
}

function renderInitialCartFromLocStor() {
  cartContainer.innerHTML = getSavedCartItems() || '';
  Object.values(cartContainer.children).forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
}

window.onload = () => {
  renderInitialCartFromLocStor();
  renderTotalPrice(cartContainer);
  renderProducts()
    .then(updateCart);
};
