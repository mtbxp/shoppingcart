const clearCart = document.querySelector('.empty-cart');
// const cart = document.querySelector('.cart');
// const subtotal = document.createElement('div');
// let valor = 0;

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

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('div', 'item__price', price));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => event.target.remove();

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getProductId = (event) => {
  const id = event.target.parentElement.firstElementChild.innerText;
  return id;
};

// const amount = async (productPrice) => {
//   valor += productPrice;
//   subtotal.className = 'total-price';
//   subtotal.innerText = Math.round(valor * 100) / 100;
//   console.log(subtotal);
//   cart.appendChild(subtotal);
// }; 

const addProductToCart = async (event) => {
  const productId = getProductId(event);
  const productObj = await fetchItem(productId);
  const olItems = document.querySelector('.cart__items');
  const productInfos = { sku: productObj.id, name: productObj.title, salePrice: productObj.price };
  const li = createCartItemElement(productInfos);
  olItems.appendChild(li);

  // amount(productObj.price);

  const liArray = JSON.parse(getSavedCartItems());
  liArray.push(li.innerText);
  saveCartItems(JSON.stringify(liArray));
};

const listOfProducts = async () => {
  const func = await fetchProducts('computador');
  const items = document.querySelector('.items');
  const productsArray = func.results;
  productsArray.forEach((element) => {
    const productObj = { 
      sku: element.id, name: element.title, image: element.thumbnail, price: element.price,
    };
    const result = createProductItemElement(productObj);
    items.appendChild(result);
  });
  const buttonsAddItems = document.querySelectorAll('.item__add');
  buttonsAddItems.forEach((button) => button.addEventListener('click', addProductToCart));
};

const getItemsFromLocalStorage = () => {
  const ol = document.querySelector('.cart__items');
  const array = JSON.parse(getSavedCartItems());
  array.forEach((element) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerHTML = element;
    ol.appendChild(li);
    li.addEventListener('click', (event) => {
      event.target.remove();
    });
  });
};

clearCart.addEventListener('click', () => {
  const ol = document.querySelector('ol');
  ol.innerHTML = null;
  localStorage.clear();
  // const test = document.querySelector('.total-price');
  // test.innerText = '';
});

const loading = async () => {
  const loadMessage = document.querySelector('.items');
  const message = document.createElement('div');
  message.className = 'loading';
  message.innerText = 'carregando...';
  loadMessage.appendChild(message);
};

const removeLoad = () => {
  const loadMessage = document.querySelector('.items');
  loadMessage.innerText = '';
};

window.onload = () => { 
  loading();
  setTimeout(() => {
    removeLoad();
    listOfProducts();
  }, 1000);
  addProductToCart(); 
  getItemsFromLocalStorage(); 
};
