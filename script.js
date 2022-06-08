const items = document.querySelector('.items');
const cart = document.querySelector('.cart__items');
const values = document.querySelector('.total-price');
const clear = document.querySelector('.empty-cart');
let array = [];
let sum = 0;

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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  const cartList = document.querySelectorAll('.cart__item');
  array = [];
  sum = 0;
  for (let ind = 0; ind < cartList.length; ind += 1) {
    array.push(cartList[ind].innerText);
    const split = cartList[ind].innerText.split('PRICE: $');
    const value = JSON.parse(split[1]);
    sum += value;
  }
  const sumValue = sum.toLocaleString('en-US', { maximumFractionDigits: 2 });
  values.innerText = `Valor Total = $${sumValue}`;
  const stringfy = JSON.stringify(array);
  saveCartItems(stringfy);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const cartAddStorage = () => {
  const cartList = document.querySelectorAll('.cart__item');
  array = [];
  for (let ind = 0; ind < cartList.length; ind += 1) {
    array.push(cartList[ind].innerText);
  }
  const stringfy = JSON.stringify(array);
  saveCartItems(stringfy);
};

const request4 = () => {
  const listButtons = document.querySelectorAll('.item__add');
  const listIds = document.querySelectorAll('.item__sku');

  listButtons.forEach((element, index) => {
    element.addEventListener('click', async () => {
      const itemAdd = await fetchItem(listIds[index].innerText);
      const product = {
        sku: itemAdd.id,
        name: itemAdd.title,
        salePrice: itemAdd.price,
      };
      sum += itemAdd.price;
      cart.appendChild(createCartItemElement(product));
      const sumValue = sum.toLocaleString('en-US', { maximumFractionDigits: 2 });
      values.innerText = `Valor Total = $${sumValue}`;
      cartAddStorage();
    });
  });
};

const record = () => {
  const parse = JSON.parse(getSavedCartItems());
  parse.forEach((element) => {
    const modify = element.split(' | ');
    const sku = modify[0].split('SKU: ');
    const name = modify[1].split('NAME: ');
    const price = modify[2].split('PRICE: $');
    const product = {
      sku: sku[1],
      name: name[1],
      salePrice: price[1],
    };
    const number = JSON.parse(price[1]);
    sum += number;
    cart.appendChild(createCartItemElement(product));
  });
  const sumValue = sum.toLocaleString('en-US', { maximumFractionDigits: 2 });
  values.innerText = `Valor Total = $${sumValue}`;
};

const clearCart = () => {
  const cartList = document.querySelectorAll('.cart__item');
  cartList.forEach((element) => {
    element.remove();
  });
  sum = 0;
  values.innerText = 'Valor Total = $0';
  localStorage.clear();
};

clear.addEventListener('click', clearCart);

window.onload = async () => {
  const data = await fetchProducts('computador');

  data.results.forEach((element) => {
    const product = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    items.appendChild(createProductItemElement(product));
  });

  request4();
  record();
};
