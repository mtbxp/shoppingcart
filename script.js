const olCartList = document.querySelector('.cart__items');

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
// const getPriceFromCartItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(olCartList.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createListProductItems = async () => {
  const { results } = await fetchProducts('computador');
  const classItems = document.querySelector('.items');
  results.forEach((listProducts) => classItems.appendChild(createProductItemElement(listProducts)));
};

const addToCart = async (itemSku) => {
  const itemSpecs = await fetchItem(itemSku);
  olCartList.appendChild(createCartItemElement(itemSpecs));
  saveCartItems(olCartList.innerHTML);
};

const getButtons = async () => {
  const getBtn = document.querySelectorAll('.item__add');
  getBtn.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentElement;
    addToCart(getSkuFromProductItem(parent));
  }));
};

const removeCartItems = async () => {
  const emptyCartButton = document.querySelector('.empty-cart');
  emptyCartButton.addEventListener('click', () => {
    while (olCartList.hasChildNodes()) {
      olCartList.removeChild(olCartList.firstChild);
    }
    localStorage.clear();
  });
};

// const calculatePriceCartItems = async () => {
//   const getCartSection = document.querySelector('.cart');
//   const createDiv = document.createElement('div');
//   const getCartItemsList = document.querySelectorAll('.cart__item');
//   const updatedPrice = 0;
//   getCartItemsList.forEach((item) => updatedPrice += item.price)
//   createDiv.className = 'total-price';
//   createDiv.innerText = `Valor Total: ${updatedPrice}`;
//   getCartSection.appendChild(createDiv)
// }

const showAfterReload = () => {
  document.querySelector('.cart__items').innerHTML = getSavedCartItems();
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((items) => items.addEventListener('click', cartItemClickListener));
};

const showLoadingScreen = async () => {
  const parentSection = document.querySelector('.items');
  const elementSection = document.createElement('section');
  parentSection.appendChild(elementSection);
  elementSection.className = 'loading';
  elementSection.innerText = 'carregando...';
};

const endLoadingScreen = async () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

window.onload = async () => { 
  showLoadingScreen();
  await createListProductItems(); 
  await getButtons();
  endLoadingScreen();
  showAfterReload();
  removeCartItems();
};
