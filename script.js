const totalPrice = () => {
  const cartList = document.querySelectorAll('.cart__item');
  let total = 0.00;
  cartList.forEach((element) => {
    const classes = element.getAttribute('class');
    const arrayClasses = classes.split(/\D+/);
    arrayClasses.shift();
    const price = arrayClasses.join('.');
    total += parseFloat(price);
  });
  const priceText = document.getElementsByClassName('total-price')[0];
  priceText.innerText = `${Math.round(total * 100) / 100}`;
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

const createProductItemElement = (sku, name, image) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  const cartContainer = document.getElementsByClassName('cart__items')[0];
  saveCartItems(JSON.stringify(cartContainer.innerHTML));
  totalPrice();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.classList.add(`$${salePrice}`);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addCartItems = async (event) => {
  const cartContainer = document.getElementsByClassName('cart__items')[0];
  const targetID = event.target.parentElement.firstChild.innerText;
  const targetInfo = await fetchItem(targetID);
  const newElement = createCartItemElement(targetInfo);
  cartContainer.appendChild(newElement);
  saveCartItems(JSON.stringify(cartContainer.innerHTML));
  totalPrice();
};

const loadCart = () => {
  const cartContainer = document.getElementsByClassName('cart__items')[0];
  cartContainer.innerHTML = JSON.parse(getSavedCartItems());
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

window.onload = async () => {
  loadCart();
  const itemsContainer = document.getElementsByClassName('items')[0];
  const objResult = await fetchProducts('computador');
  objResult.results.forEach(({ id, title, thumbnail }) => {
      itemsContainer.appendChild(createProductItemElement(id, title, thumbnail));
    });
  const arrayOfButtons = document.querySelectorAll('.item__add');
  arrayOfButtons.forEach((button) => {
    button.addEventListener('click', addCartItems);
  });
  const clearButton = document.getElementsByClassName('empty-cart')[0];
  clearButton.addEventListener('click', () => {
    const cartContainer = document.getElementsByClassName('cart__items')[0];
    cartContainer.innerHTML = '';
    saveCartItems(JSON.stringify(cartContainer.innerHTML));
    totalPrice();
  });
  totalPrice();
};
