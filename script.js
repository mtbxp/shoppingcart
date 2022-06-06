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
  totalPrice.innerText = localStorage.getItem('totalPrice');
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
};

callCreateProductItemElement();

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
};

const totalPriceSoma = async (arg) => {
  const item = await fetchItem(arg);
  if (totalPrice.innerText) {
    const valorRelativo = parseFloat(totalPrice.innerText) + parseFloat(item.price);
    totalPrice.innerText = valorRelativo;
  } else {
    totalPrice.innerText = item.price;
  }
};

const cartItemClickListener = async (arg) => {
  const string = Number(arg.target.innerText.split('$')[1]);
  totalPrice.innerText = Number(totalPrice.innerText) - string;
  localStorage.setItem('totalPrice', totalPrice.innerText);
  arg.target.remove();
  await saveCartItems(olCartItems.innerHTML);
};

olCartItems.addEventListener('click', cartItemClickListener);

const callCreateCartItemElement = (arg) => {
  fetchItem(arg).then((i) => {
    olCartItems.appendChild(createCartItemElement(i));
    saveCartItems(olCartItems.innerHTML);
    totalPriceSoma(arg);
    localStorage.setItem('totalPrice', totalPrice.innerText); 
}); 
};

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

window.onload = () => { localStorageGetItem(); loadingCreate(); };