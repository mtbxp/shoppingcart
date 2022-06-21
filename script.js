const cart = document.querySelector('.cart__items');
const totalPriceElement = document.querySelector('.total-price');

const getTotalPrice = async (sku, remove) => {
  let totalPrice = parseFloat(totalPriceElement.innerText, 10);
  const { price } = await fetchItem(sku);
  if (remove) {
    totalPrice -= price;
  } else {
  totalPrice += price;
}
  totalPriceElement.innerText = Math.round(totalPrice * 100) / 100;
  localStorage.setItem('totalPrice', Math.round(totalPrice * 100) / 100);
};

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
  const productInfos = product.innerText;
  const productSku = productInfos.substring(5, 18);
  getTotalPrice(productSku, true);
  saveCartItems(getCartItems());
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
  getTotalPrice(itemSku);
  saveCartItems(getCartItems());
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

const cartItemsFromLocalStorage = () => {
  if (getSavedCartItems() !== null) {
  const savedCartItems = getSavedCartItems().split(',');
  savedCartItems.forEach((item) => {
     const li = document.createElement('li');
     li.className = 'cart__item';
     li.innerText = item;
     li.addEventListener('click', cartItemClickListener);
     cart.appendChild(li);
   });
   totalPriceElement.innerText = localStorage.getItem('totalPrice');
  }
};

window.onload = async () => { 
  await appendProductsElements();
  addToCartClickListener();
};
