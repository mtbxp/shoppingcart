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

const cartItemClickListener = async (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const placeCartItem = async (item) => {
  const itemData = await fetchItem(item);
  const itemInfo = {
    sku: itemData.id,
    name: itemData.title,
    salePrice: itemData.price,
  };
  const itemToPlace = createCartItemElement(itemInfo);
  const cartItems = document.querySelector('.cart__items');
  cartItems.appendChild(itemToPlace);
  saveCartItems(cartItems.innerHTML);
};

const totalPrice = () => {
  const section = document.createElement('section');
  section.className = 'total-price';
  section.innerText = 'Preço Total:';
  const cart = document.querySelector('.cart');
  cart.appendChild(section);
};

const priceSum = () => {
  
};

const buttonListener = () => {
  const grid = document.querySelectorAll('.item__add');
  grid.forEach((element) => element.addEventListener('click', () => placeCartItem(element
  .parentElement.firstChild.innerText)));
  priceSum();
};

const itensToBePlaced = async () => {
  const computerItens = await fetchProducts('computador');
  const computerData = computerItens.results;
  const computerInfo = computerData.map((element) => {
    const info = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    return info;
  });
  computerInfo.forEach((element) => {
    const itemToPlace = createProductItemElement(element);
    document.querySelector('.items').appendChild(itemToPlace);
  });
  buttonListener();
};
const emptyCart = () => {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', () => {
  const cart = document.querySelectorAll('.cart__item');
  cart.forEach((element) => element.remove());  
  });
};

const cartRecovery = () => {
  const cart = document.querySelector('.cart__items');
  cart.innerHTML = getSavedCartItems();
  cart.childNodes.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

window.onload = () => {
  itensToBePlaced();
  emptyCart();
  cartRecovery();
  totalPrice();
};
