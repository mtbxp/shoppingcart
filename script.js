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

const cartItemClickListener = (event) => {
  event.target.remove();
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
  const listToCart = document.querySelector('.cart__items');
  listToCart.appendChild(createCartItemElement(itemSpecs));
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
    const cartItems = document.querySelector('.cart__items');
    while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
    }
  });
};

const showLoadingScreen = async () => {
  const parentSection = document.querySelector('.items');
  const elementSection = document.createElement('section');
  parentSection.appendChild(elementSection)
  elementSection.className = 'loading';
  elementSection.innerText = 'carregando...';
}

const endLoadingScreen = async () => {
  const loading = document.querySelector('.loading');
  loading.remove();
}

window.onload = async () => { 
  showLoadingScreen();
  await createListProductItems(); 
  await getButtons();
  removeCartItems();
  endLoadingScreen();
};
