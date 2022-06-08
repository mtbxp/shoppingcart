const ol = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const sectionItems = document.querySelector('.items');
const cart = document.querySelector('.cart');

const loadingPage = async () => {
  const loading = document.createElement('p');
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  cart.appendChild(loading);
  await fetchProducts('computador');
  totalPrice.innerText = localStorage.getItem('totalPrice');
  loading.remove();
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

const createProductItem = () => {
  fetchProducts('computador').then((response) => response.results
  .forEach((data) => sectionItems.append(createProductItemElement(data))));
};

  createProductItem();

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  
  return li;
};

const priceSum = async (param) => {
  const item = await fetchItem(param);
  if (totalPrice.innerText) {
    const sumValue = parseFloat(totalPrice.innerText) + parseFloat(item.price);
    totalPrice.innerText = sumValue;
  } else {
    totalPrice.innerText = item.price;
  }
};

const cartItemClickListener = async (event) => {
  const string = Number(event.target.innerText.split('$')[1]);
  totalPrice.innerText = Number(totalPrice.innerText) - string;
  localStorage.setItem('totalPrice', totalPrice.innerText);
  event.target.remove();
  await saveCartItems(ol.innerHTML);
};

ol.addEventListener('click', cartItemClickListener);

const callCreateCartItemElement = (itemElement) => {
  fetchItem(itemElement).then((element) => {
    ol.appendChild(createCartItemElement(element));
    saveCartItems(ol.innerHTML);
  });
  priceSum(itemElement);
    localStorage.setItem('totalPrice', totalPrice.innerText);     
};

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const el = event.target.parentNode.firstChild.innerText;
      callCreateCartItemElement(el);
    }
    if (event.target.classList.contains('empty-cart')) {
      ol.innerHTML = '';
      totalPrice.innerHTML = '';
      localStorage.clear();
    }
  });
  const localStorageGetItem = () => {
    ol.innerHTML = getSavedCartItems();
  };  

  window.onload = () => { localStorageGetItem(); loadingPage(); };
