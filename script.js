const itemsSection = document.querySelectorAll('.items')[0];
const cart = document.getElementsByClassName('cart__items')[0];
const totalPrice = document.querySelectorAll('.total-price')[0];

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

const loading = createCustomElement('span', 'loading', 'carregando...');

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

const sumProducts = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  let sum = 0;
  if (cartItems.length > 0) {
    cartItems.forEach((element) => {
    sum += parseFloat(element.innerText.split('$')[1]);
    });
  }
  // return pricesArr;
  totalPrice.innerHTML = sum;
};
// console.log(sumProducts());

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
  saveCartItems(JSON.stringify(cart.innerHTML));
  sumProducts();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} |\n NAME: ${name} |\n PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionarElementosNoHtml = async () => {
  itemsSection.appendChild(loading);
  const fetchProductsReturn = await fetchProducts('computador');
  document.querySelectorAll('.loading')[0].remove();
  fetchProductsReturn.results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    const section = createProductItemElement({ sku, name, image });
    itemsSection.appendChild(section);
  });
};
adicionarElementosNoHtml();

const adicionarAoCarrinho = async (event) => {
  const eTarget = event.target;
  if (eTarget.classList.contains('item__add')) {
    // cart.appendChild(loading); // ativar
    const itemSku = getSkuFromProductItem(eTarget.parentNode);
    const response = await fetchItem(itemSku);
    // document.querySelectorAll('.loading')[0].remove(); // ativar
    const { id: sku, title: name, price: salePrice } = response;
    const li = createCartItemElement({ sku, name, salePrice });
    cart.appendChild(li);
    saveCartItems(JSON.stringify(cart.innerHTML));
    sumProducts();
  }
};

const buttonsAddEvent = () => {
itemsSection.addEventListener('click', adicionarAoCarrinho);
};
buttonsAddEvent();

const emptyCart = () => {
  cart.innerHTML = '';
  localStorage.clear();
  totalPrice.innerHTML = 0;
};
document.querySelectorAll('.empty-cart')[0].addEventListener('click', emptyCart);

const getLocalStorageItems = () => {
  const localStorageCart = JSON.parse(getSavedCartItems('cartItems'));
  cart.innerHTML = localStorageCart;
  const liArray = document.querySelectorAll('li');
  liArray.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

window.onload = () => {
getLocalStorageItems();
sumProducts();
};
