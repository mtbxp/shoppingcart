const cart = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');

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

const calcTotal = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  let total = 0;
  cartItems.forEach((item) => {
    const price = item.innerHTML.split('$')[1];
    total += parseFloat(price);
  });
  totalPrice.innerHTML = total;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  if (cart.innerHTML !== 'undefined') {
    saveCartItems(cart.innerHTML);
  }
  calcTotal();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Minhas funções

const addProductToCart = async (itemId) => {
  const { id, title, price } = await fetchItem(itemId);
  const cartItemObj = { 
    sku: id,
    name: title,
    salePrice: price,
  };
  const carItem = createCartItemElement(cartItemObj);
  carItem.addEventListener('click', cartItemClickListener);
  cart.appendChild(carItem);
  if (cart.innerHTML !== 'undefined') {
    saveCartItems(cart.innerHTML);
  }
  calcTotal();
};

const addEventButton = () => {
  const elements = document.querySelectorAll('.item');
  elements.forEach((element) => {
    const elementButton = element.querySelector('button.item__add');
    elementButton.addEventListener('click', () => {
      const itemId = getSkuFromProductItem(element);
      addProductToCart(itemId);
    });
  });
};

const renderProducts = async () => {
  const { results } = await fetchProducts('computaador');
  results.forEach((product) => {
    const { id, title, thumbnail } = product;
    const productObj = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    const item = createProductItemElement(productObj);
    document.querySelector('.items').appendChild(item);
  });
  addEventButton();
};

const renderSavedCartItems = () => {
  if (getSavedCartItems() !== undefined) {
    const cartItems = document.querySelector('.cart__items');
    cartItems.innerHTML = getSavedCartItems();
    document.querySelectorAll('.cart__item')
    .forEach((item) => {
      item.addEventListener('click', cartItemClickListener);
    });
  }
};

document.querySelector('.empty-cart')
.addEventListener('click', () => {
  cart.innerHTML = '';
  saveCartItems(cart.innerHTML);
});

window.onload = () => {
  renderProducts();
  renderSavedCartItems();
  calcTotal();
};
