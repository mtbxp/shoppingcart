const cart = document.querySelector('.cart__items');
const totalPriceElement = document.querySelector('.total-price');

const getSkuFromCartItems = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const cartItemsSku = [];
  cartItems.forEach((item) => {
    const itemInfos = item.innerText;
    cartItemsSku.push(itemInfos.substring(5, 18));
  });
  return cartItemsSku;
};

const refreshTotalPrice = () => {
  let totalPrice = 0;
  getSkuFromCartItems().forEach(async (item) => {
    const { price } = await fetchItem(item);
    totalPrice += price;
    totalPriceElement.innerText = totalPrice;
  });
  if (document.querySelectorAll('cart__item').length < 2) {
    totalPriceElement.innerText = 0;
  }
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

const cartItemClickListener = (event) => {
  const product = event.target;
  cart.removeChild(product);
  saveCartItems(getSkuFromCartItems());
  refreshTotalPrice();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getItemsInfos = async (productId) => {
  const { results } = await fetchProducts(productId);
  const productsInfos = [];
  results.forEach((result) => {
    productsInfos.push({
      sku: result.id,
      name: result.title,
      image: result.thumbnail,
    });
  });
  return productsInfos; 
};

const appendCartItems = async (itemSku) => {
  const itemInfos = await fetchItem(itemSku);
  const cartItem = createCartItemElement({
    sku: itemSku,
    name: itemInfos.title,
    salePrice: itemInfos.price,
  });
  cart.appendChild(cartItem);
};

const addItemToCart = async (e) => {
  const item = e.target.parentElement;
  const itemSku = getSkuFromProductItem(item);
  await appendCartItems(itemSku);
  saveCartItems(getSkuFromCartItems());
  refreshTotalPrice();
};

const appendProductsElements = async () => {
  const itemsSection = document.querySelector('.items');
  (await getItemsInfos()).forEach((item) => {
    itemsSection.appendChild(createProductItemElement(item));
  });
};

const addToCartClickListener = () => {
  const addCartButtons = document.querySelectorAll('.item__add');
  addCartButtons.forEach((button) => {
    button.addEventListener('click', addItemToCart);
  });
};

const appendItemsFromLocalStorage = async () => {
  if (getSavedCartItems()) {
    const localStorageItems = getSavedCartItems();
    const splitedLocalStorageItems = localStorageItems.split(',');
    await splitedLocalStorageItems.forEach(async (item) => {
      await appendCartItems(item);
      await refreshTotalPrice();
    });
  }
};

window.onload = async () => {
  await appendItemsFromLocalStorage();
  await appendProductsElements();
  addToCartClickListener();
};
