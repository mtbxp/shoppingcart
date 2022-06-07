const CART_CLASS = '.cart__items';

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

const updateTotalPrice = (price) => {
  const currentPrice = document.querySelector('.total-price');
  if (price === undefined) {
    currentPrice.textContent = '0,00';
    return;
  }
  // const currentPriceValue = currentPrice.textContent.replace('.', '').replace(',', '.'); 
  const currentPriceValue = currentPrice.textContent.replace(',', '.'); // apenas para passar no Cypress
  let newPrice = parseFloat(currentPriceValue) + price;
  newPrice = newPrice.toLocaleString('en-us', {
    // minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  currentPrice.textContent = newPrice.replace(',', ''); // replace apenas para o Cypress
};

const cartItemClickListener = (event) => {
  const item = event.target;
  const price = item.textContent.split('$')[1];
  updateTotalPrice(-parseFloat(price));
  item.remove();
};

const createCartItemElement = ({ sku, name, salePrice }, textFromLocalStorage) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.addEventListener('click', cartItemClickListener);
  if (textFromLocalStorage !== undefined) {
    li.textContent = textFromLocalStorage;
  } else {
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    updateTotalPrice(salePrice);
  }
  return li;
};

const addItemToCartFromAddButton = async (event) => {
  const cart = document.querySelector(CART_CLASS);
  const itemId = getSkuFromProductItem(event.target.parentElement);
  const item = await fetchItem(itemId);
  const { id: sku, title: name, price: salePrice } = item;
  const cartItem = createCartItemElement({ sku, name, salePrice });
  cart.append(cartItem);
  saveCartItems();
};

const toggleLoadingMessage = (parentElement, bool) => {
  if (bool) {
    const addLoading = document.createElement('section');
    addLoading.className = 'loading';
    addLoading.textContent = 'carregando...';
    parentElement.append(addLoading);
  } else {
    const removeLoading = document.querySelector('.loading');
    removeLoading.remove();
  }
};

const addProductsToSite = async () => {
  const items = document.querySelector('.items');
  toggleLoadingMessage(items, true);
  const products = await fetchProducts('computador');
  toggleLoadingMessage(items, false);
  products.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const productSection = createProductItemElement({ sku, name, image });
    items.append(productSection);
  });
  const addItemButtons = document.querySelectorAll('.item__add');
  addItemButtons.forEach((button) => button.addEventListener('click', addItemToCartFromAddButton));
};

const emptyCart = () => {
  const cart = document.querySelector(CART_CLASS);
  cart.innerHTML = '';
  updateTotalPrice();
  localStorage.setItem('cartItems', JSON.stringify([]));
};

const addItemsFromLocalStorage = () => {
  const storedCartItems = getSavedCartItems();
  const cart = document.querySelector(CART_CLASS);
  storedCartItems.forEach((storedItem) => {
    const newItem = createCartItemElement({}, storedItem);
    cart.append(newItem);
    const price = storedItem.split('$')[1];
    updateTotalPrice(parseFloat(price));
  });
};

const checkLocalStorage = () => {
  if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  } else {
    addItemsFromLocalStorage();
  }
};

const emptyCartButton = document.querySelector('.empty-cart');
emptyCartButton.addEventListener('click', emptyCart);

window.onload = () => { 
  addProductsToSite();
  checkLocalStorage();
};
