const myCart = document.querySelector('.cart__items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  myCart.removeChild(event.target);
  const myItemText = JSON.stringify(event.target.innerText);
  const savedItems = JSON.parse(localStorage.getItem('cartItems'));
  const myItem = JSON.parse(myItemText).split('|')[0].split(' ')[1];
  console.log((savedItems));

  savedItems.forEach((elem, index) => {
    if (elem === myItem) {
      savedItems.splice(index, 1);
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(savedItems));
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const toCart = async (event) => {
  const itemId = getSkuFromProductItem(event.target.parentElement);
  const response = await fetchItem(itemId);
  const localCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const item = event.target.parentNode.firstChild.innerHTML;

  localCart.push(item);
  myCart.appendChild(createCartItemElement(response));

  saveCartItems(JSON.stringify(localCart));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = section.querySelector('button');
  button.addEventListener('click', toCart);
  return section;
};

const itensSection = document.querySelector('.items');

const loadProducts = async () => {
  const toSellThem = await fetchProducts('computador');

  toSellThem.forEach(({ id, title, thumbnail }) => itensSection
  .appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail })));
};

const loadSaved = async (items) => {  
  const storageItems = JSON.parse(items);
  console.log(storageItems);
  storageItems.forEach(async (elem) => {
    const response = await fetchItem(elem);
    myCart.appendChild(createCartItemElement(response));
  });
};

window.onload = async () => {
  await loadProducts();
  loadSaved(getSavedCartItems());
};
