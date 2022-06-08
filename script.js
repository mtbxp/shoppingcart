// getSavedCartItems();
const emptyAll = document.querySelector('.empty-cart');

const removeAll = () => {
  const cartItems = document.querySelector('.cart__items');
  const childsNumber = cartItems.childElementCount;
  for (let index = 0; index < childsNumber; index += 1) {
    cartItems.firstElementChild.remove();
  }
};

emptyAll.addEventListener('click', removeAll);

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

const createItems = (item) => {
  const items = document.querySelector('.items');
  items.append(item);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const removeFromStorage = (target) => {
  const storage = getSavedCartItems();
  const text = target.innerText;
  const newStorage = storage.filter((obj) => !text.includes(obj.sku));
  localStorage.setItem('cartItems', JSON.stringify(newStorage));
};

const cartItemClickListener = (list) => {
  // coloque seu código aqui
  if (list.target !== undefined) {
    removeFromStorage(list.target);
    list.target.remove();
  }
};

const removeTotalListener = (obj) => {
  const subtotal = document.querySelector('.total-price');
  let inner = parseFloat(subtotal.innerHTML);
  inner -= obj.salePrice;
  subtotal.innerHTML = inner;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const defineInitialSubtotal = (obj = 0) => {
  const cart = document.querySelector('.cart');
  const subtotal = document.createElement('div');
  subtotal.className = 'total-price';
  subtotal.innerHTML = obj === 0 ? 0 : obj.salePrice;
  cart.append(subtotal);
};
// defineInitialSubtotal();

const sumProducts = (objElement) => {
  const subtotal = document.querySelector('.total-price');
  let number = parseFloat(subtotal.innerHTML);
  number += objElement.salePrice;
  subtotal.innerHTML = Math.round(number * 100) / 100;
};

const createItemElement = (item, obj) => {
  const cart = document.querySelector('.cart__items');
  cart.append(item);
  sumProducts(obj);
};

const initialRender = () => {
  const cartArray = getSavedCartItems(); // lista
  if (cartArray === null) {
    defineInitialSubtotal();
  } else {
    [...cartArray].forEach((obj) => {
    defineInitialSubtotal(obj);
    const myLi = createCartItemElement(obj);
    cartItemClickListener(myLi);
    createItemElement(myLi, obj);
    });
  }
};

const objsArray = getSavedCartItems() || [];

const addToCartListener = () => {
  const addToCart = document.querySelectorAll('.item__add');
  addToCart.forEach((item) => item.addEventListener('click', (event) => {
    idElement = event.target.parentElement.firstChild.innerText;
    fetchItem(idElement).then((result) => {
      const obj = {
        sku: result.id,
        name: result.title,
        salePrice: result.price,
      };
      saveCartItems(obj, objsArray);
      const myLi = createCartItemElement(obj);
      cartItemClickListener(myLi);
      createItemElement(myLi, obj);
      removeTotalListener(obj);
    });
  }));
};

const insertLoad = () => {
  const cart = document.querySelector('.cart');
  const load = document.createElement('h2');
  load.className = 'loading';
  load.innerHTML = 'Carregando...';
  cart.append(load);
};
insertLoad();

const removeLoad = () => {
  const load = document.querySelector('.loading');
  load.remove();
};

fetchProducts('computador').then((result) => {
  result.forEach((product) => {
  const obj = {
    sku: product.id,
    name: product.title,
    image: product.thumbnail,
  };
  const myElement = createProductItemElement(obj);
  createItems(myElement);
  });
  addToCartListener();
  removeLoad();
});

window.addEventListener('load', initialRender);
window.onload = () => { };
