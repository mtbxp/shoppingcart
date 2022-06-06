const sectionItems = document.getElementsByClassName('items')[0];
const olCartItems = document.getElementsByClassName('cart__items')[0];
const totalPrice = document.getElementsByClassName('total-price')[0];
const cart = document.getElementsByClassName('cart')[0];

const loadingCreate = async () => {
  const el = document.createElement('p');
  el.className = 'loading';
  el.innerText = 'carregando...';
  cart.appendChild(el);
  await fetchProducts('computador');
  el.remove();
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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const callCreateProductItemElement = () => {
  fetchProducts('computador').then((i) => i.results
  .forEach((j) => sectionItems.append(createProductItemElement(j))));
  //loading.remove();
};

callCreateProductItemElement();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
};

const totalPriceSubtracao = async (arg) => {
  const item = await fetchItem(arg);
  const valorRelativo = (100 * parseFloat(totalPrice.innerText) - 100 * parseFloat(item.price)) / 100;
  totalPrice.innerText = valorRelativo;
  console.log(totalPrice, totalPrice.innerText);
};

const totalPriceSoma = async (arg) => {
  const item = await fetchItem(arg);
  if (totalPrice.innerText) {
    const valorRelativo = (100 * parseFloat(totalPrice.innerText) + 100 * parseFloat(item.price)) / 100;
    totalPrice.innerText = valorRelativo;
  } else {
    totalPrice.innerText = item.price;
  }
};

const cartItemClickListener = async (arg) => {
  console.log(arg.target.parentNode);
  arg.target.remove();
  await saveCartItems(olCartItems.innerHTML);
  await totalPriceSubtracao(getSkuFromProductItem(arg.target));
};

olCartItems.addEventListener('click', cartItemClickListener);

const callCreateCartItemElement = (arg) => {
  fetchItem(arg).then((i) => {
    olCartItems.appendChild(createCartItemElement(i));
    saveCartItems(olCartItems.innerHTML);
    totalPriceSoma(arg); 
});
  //   .then(saveCartItems(olCartItems.innerHTML));
  // totalPriceSoma(arg);
};
// let valor = 0;
// const callTotalPrice = (arg) => {
//   fetchItem(arg).then((i) => {
//     valor += i.price;
//     totalPrice.innerText = valor;
//   });
// };

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const el = event.target.parentNode.firstChild.innerText;
    callCreateCartItemElement(el);
  }
  if (event.target.classList.contains('empty-cart')) {
    olCartItems.innerHTML = '';
    totalPrice.innerHTML = '';
    localStorage.clear();
  }
});

const localStorageGetItem = () => {
  olCartItems.innerHTML = getSavedCartItems();
};  

window.onload = () => { localStorageGetItem();loadingCreate() };