const value = document.createElement('label');
const getOl = () => document.querySelector('.cart__items');
const getLis = () => document.querySelectorAll('.cart__item');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const formatNumber = (number) => {
  const opa = number.toString().split('.');
  const decimal = Math.round(opa[1].slice(0, 3) / 10);
  return opa[0] + (decimal / 100);
};
console.log(formatNumber(3233.6099999999997));

const sumPrices = () => {
  const sectionCart = document.querySelector('.cart');
  value.className = 'total-price';
  value.style.padding = '10px';
  sectionCart.appendChild(value);

  let price = 0;
  getLis().forEach((li) => {
    price += (parseFloat(li.innerText.slice(-17, li.innerText.length).replace(/[^\d.-]/g, ''))); // isso pega a ultima parte das lis, remove a parte das letras que sobraram para ficar apenas numeros e pontos
  });
  value.innerText = formatNumber(price);
  if (price !== 0) {
    sectionCart.appendChild(value);
  } else sectionCart.removeChild(value);
};

const setStorage = () => {
  saveCartItems(JSON.stringify(getOl().innerHTML));
};

const getStorage = () => {
  const items = JSON.parse(getSavedCartItems());
  getOl().innerHTML = items;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  setStorage();
  sumPrices();

  if (getLis().length === 0) localStorage.clear();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductToCart = async (event) => {
  const itemId = await fetchItem(event);
  const { id, title, price } = itemId;
  const reference = {
    sku: id,
    name: title,
    salePrice: price,
  };
  const selectedItem = createCartItemElement(reference);
  getOl().appendChild(selectedItem);

  setStorage();
  sumPrices();
};

const createCustomElement = (element, className, innerText, sku) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') e.addEventListener('click', () => addProductToCart(sku));
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku));

  return section;
};

const getList = async () => {
  const query = await fetchProducts('computador');
  query.forEach(({ id, title, thumbnail }) => {
    const reference = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    const addElement = createProductItemElement(reference);
    const item = document.getElementsByClassName('items')[0];
    item.appendChild(addElement);
  });
};

const btnEmpty = () => {
  // const lis = document.querySelectorAll('.cart__item');
  getLis().forEach((element) => element.remove());
  localStorage.clear();
  sumPrices();
};

const emptyCart = () => {
  const btnEmptyCart = document.querySelector('.empty-cart');
  btnEmptyCart.addEventListener('click', btnEmpty);
};

const clickRemoveItem = (event) => {
  if (event.target.className === 'cart__item') event.target.remove();
  setStorage();
};

const removeItem = () => {
  if (getOl().children.length > 0) {
    getOl().addEventListener('click', clickRemoveItem);
  }
};

window.onload = () => {
  getList();
  getStorage();
  emptyCart();
  sumPrices();
  removeItem();
};
