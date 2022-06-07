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

const createProductItemElement = ({ sku, name, image, salePrice }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `$${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const showLoadingMessage = (classLoadingContainer) => {
  const loadingContainer = document.querySelector(classLoadingContainer);
  loadingContainer.appendChild(createCustomElement('span', 'loading', 'carregando...'));
};

const hideLoadingMessage = () => {
  const loadingMessage = document.querySelector('.loading');
  loadingMessage.remove();
};

const createComputerList = async () => {
  showLoadingMessage('.items');
  const computerData = (await fetchProducts('computador')).results;
  hideLoadingMessage();

  const computerExtractedData = computerData.map(({ id, title, thumbnail, price }) => ({
    sku: id,
    name: title,
    image: thumbnail,
    salePrice: price,
  }));
  const computerList = document.querySelector('.items');
  computerExtractedData.forEach((computer) => {
    computerList.appendChild(createProductItemElement(computer));
  });
};

const calculateTotalPrice = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const cartItemPrices = [];
  cartItems.forEach((item) => {
    const itemPrice = item.innerText.split(' PRICE: $', 2)[1];
    cartItemPrices.push(Number(itemPrice));
  });
  const totalPrice = cartItemPrices.reduce((sum, price) => sum + price, 0);
  return Number(totalPrice.toFixed(2));
};

const updateTotalPrice = () => {
  const totalPriceContainer = document.querySelector('.total-price');
  totalPriceContainer.innerHTML = calculateTotalPrice();
};

const addToCart = async (event) => {
  const itemID = event.target.parentElement.firstElementChild.innerText;
  showLoadingMessage(classCartItems);
  const itemData = await fetchItem(itemID);
  hideLoadingMessage();

  const itemExtractedData = {
    sku: itemData.id,
    name: itemData.title,
    salePrice: itemData.price,
  };
  const cartItemList = document.querySelector(classCartItems);
  cartItemList.appendChild(createCartItemElement(itemExtractedData));

  saveCartItems(JSON.stringify(cartItemList.innerHTML));
  updateTotalPrice();
};

const enableAddToCartBtns = () => {
  const addToCartBtns = document.querySelectorAll('.item__add');
  addToCartBtns.forEach((btn) => btn.addEventListener('click', addToCart));
};

const cartItemClickListener = (event) => {
  event.target.remove();
  const cartItemList = document.querySelector(classCartItems);

  saveCartItems(JSON.stringify(cartItemList.innerHTML));
  updateTotalPrice();
};

const enableRemoveCartItem = () => {
  const cartItemList = document.querySelector(classCartItems);
  cartItemList.addEventListener('click', cartItemClickListener);
};

const emptyCart = () => {
  const cartItemList = document.querySelector(classCartItems);
  cartItemList.innerHTML = '';

  saveCartItems(JSON.stringify(cartItemList.innerHTML));
  updateTotalPrice();
};

const enableEmptyCartBtn = () => {
  const emptyCartBtn = document.querySelector('.empty-cart');
  emptyCartBtn.addEventListener('click', emptyCart);
};

const initializePage = async () => {
  await createComputerList();
  enableAddToCartBtns();
  enableRemoveCartItem();
  enableEmptyCartBtn();

  const cartItemsList = document.querySelector(classCartItems);
  if (localStorage.getItem('cartItems') !== null) {
    cartItemsList.innerHTML = JSON.parse(getSavedCartItems());
  }

  updateTotalPrice();
};

window.onload = () => { initializePage(); };
