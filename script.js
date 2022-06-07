const classCartItems = '.cart__items';

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const calculateTotalPrice = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const cartItemsPrices = [];
  cartItems.forEach((item) => {
    const itemPrice = item.innerText.split(' PRICE: $', 2)[1];
    cartItemsPrices.push(Number(itemPrice));
  });
  return cartItemsPrices.reduce((sum, price) => sum + price, 0);
};

const printTotalPrice = () => {
  const totalPriceContainer = document.querySelector('.total-price');
  totalPriceContainer.innerHTML = calculateTotalPrice();
};

const cartItemClickListener = (event) => {
  event.target.remove();
  const cartItemsList = document.querySelector(classCartItems);
  saveCartItems(JSON.stringify(cartItemsList.innerHTML));
  printTotalPrice();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const createComputersList = async () => {
  const computersData = (await fetchProducts('computador')).results;
  const computersExtractedData = computersData.map(({ id, title, thumbnail }) => ({
    sku: id,
    name: title,
    image: thumbnail,
  }));
  const computersList = document.querySelector('.items');
  computersExtractedData.forEach((computer) => {
    computersList.appendChild(createProductItemElement(computer));
  });
};

const addToCart = async (event) => {
  const itemID = event.target.parentElement.firstElementChild.innerText;
  const itemData = await fetchItem(itemID);
  const itemExtractedData = {
    sku: itemData.id,
    name: itemData.title,
    salePrice: itemData.price,
  };
  const cartItemsList = document.querySelector(classCartItems);
  cartItemsList.appendChild(createCartItemElement(itemExtractedData));
  saveCartItems(JSON.stringify(cartItemsList.innerHTML));
  printTotalPrice();
};

const activateComputersBtns = () => {
  const addToCartBtns = document.querySelectorAll('.item__add');
  addToCartBtns.forEach((btn) => btn.addEventListener('click', addToCart));
};

const activateRemoveItemToCart = () => {
  const cartItemsList = document.querySelector(classCartItems);
  cartItemsList.addEventListener('click', cartItemClickListener);
};

const initializePage = async () => {
  await createComputersList();
  activateComputersBtns();
  activateRemoveItemToCart();
  const cartItemsList = document.querySelector(classCartItems);
  if (localStorage.getItem('cartItems') !== null) {
    cartItemsList.innerHTML = JSON.parse(getSavedCartItems());
  }
  printTotalPrice();
};

window.onload = () => { initializePage(); };
