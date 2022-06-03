const sectionItems = document.querySelector('.items');
const olCartItems = document.querySelector('.cart__items');
const spanTotalPrice = document.querySelector('.total-price');
const clearCartBtn = document.querySelector('.empty-cart');

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

const subFromCartTotal = (liText) => {
  const price = liText.slice(liText.indexOf('$') + 1);
  // console.log(price);
  const totalPrice = Number(spanTotalPrice.innerText) - Number(price);
  spanTotalPrice.innerText = Math.round(totalPrice * 100) / 100;
};

const cartItemClickListener = (event) => {
  if (event.target.classList.contains('cart__item')) {
    subFromCartTotal(event.target.innerText);
    event.target.parentElement.removeChild(event.target);
    saveCartItems(olCartItems.innerHTML);
  }
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {  
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;  
  return li;
};

clearCartBtn.addEventListener('click', () => {
  olCartItems.textContent = '';
  spanTotalPrice.innerText = 0;
});

olCartItems.addEventListener('click', cartItemClickListener);

const addToCartTotal = ({ price }) => {
  const totalPrice = Number(spanTotalPrice.innerText) + price;
  spanTotalPrice.innerText = Math.round(totalPrice * 100) / 100;
};

sectionItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const productId = getSkuFromProductItem(event.target.parentElement);
    fetchItem(productId)
    .then((product) => {
      olCartItems.appendChild(createCartItemElement(product));
      addToCartTotal(product);
      saveCartItems(olCartItems.innerHTML);
    });
  }
});

fetchProducts('computador')
.then((products) => {
products.results.forEach((product) => {
  sectionItems.appendChild(createProductItemElement(product));
});
});

window.onload = () => {
  getSavedCartItems();
};
