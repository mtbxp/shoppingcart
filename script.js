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

const functionReturn = async () => {
  const products = await fetchProducts('computador');
  const section = document.querySelector('.items');
  products.results.forEach((argument) => {
    const child = createProductItemElement(argument);
    section.appendChild(child);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // modificando para o primeiro commit
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const cartItems = async (event) => {
  const id = event.target.parentElement.firstChild.innerHTML;
  const products = await fetchItem(id);
  const createItem = createCartItemElement(products);
  const cart = document.querySelector('.cart__items');
  cart.appendChild(createItem);
  saveCartItems(cart.innerHTML);
};

const addButton = () => {
  const button = document.getElementsByClassName('item__add');
  const modifyButton = Array.from(button);
  modifyButton.forEach((element) => {
    element.addEventListener('click', cartItems);
  });
};

window.onload = async () => {
  await functionReturn();
  addButton();
 };
