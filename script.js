const productSection = document.querySelector('.items');
const itemCart = document.querySelector('.cart__items');
const removeItemCart = document.querySelector('.empty-cart');
const classCart = document.querySelector('.cart');
const classPrice = document.querySelector('.total-price');

const getLoading = async () => {
  const element = document.createElement('p');
  element.className = 'loading';
  element.innerText = 'carregando...';
  classCart.appendChild(element);
  await fetchProducts('computador');
  classPrice.innerText = localStorage.getItem('classPrice');
  element.remove();
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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// let finalPrice = 0; 
// const correctValue = Math.random((finalPrice + arg) * 100) / 100;
// finalPrice = correctValue;

const totalSum = async (item) => {
  const items = await fetchItem(item);
  if (classPrice.innerText) {
    const itemsValue = parseFloat(classPrice.innerText) + parseFloat(items.price);
    classPrice.innerText = itemsValue;
  } else {
    classPrice.innerText = items.price;
  }
};

const cartItemClickListener = async (event) => {
  const cartItem = document.querySelector('.cart__item');
  event.target.classList.contains('cart__item');
    const valueItems = Number(event.target.innerText.split('$')[1]);
    classPrice.innerText = Number(classPrice.innerText) - valueItems;
    cartItem.remove();
    await saveCartItems(itemCart.innerHTML);
};

itemCart.addEventListener('click', cartItemClickListener);

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const products = () => {
  fetchProducts('computador')
    .then((element) => element.results
    .forEach((product) => productSection.appendChild(createProductItemElement(product))));
};

productSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const itemSection = event.target.parentNode;
    const idItem = getSkuFromProductItem(itemSection);
    fetchItem(idItem).then((product) => {
      itemCart.appendChild(createCartItemElement(product));

      saveCartItems(itemCart.innerHTML);
      totalSum(idItem);
      localStorage.setItem('classPrice', classPrice.innerText);
    }); 
  }
});

removeItemCart.addEventListener('click', () => {
  const listCompletd = document.querySelector('.cart__items');

  listCompletd.innerHTML = '';
  classPrice.innerText = '';
  localStorage.clear();
});

const getLocalStorage = () => {
  itemCart.innerHTML = getSavedCartItems();
};

window.onload = () => {
  getLocalStorage();
  getLoading();
  products();
};
