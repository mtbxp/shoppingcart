const classItems = document.getElementById('itemsList');
const cartList = document.querySelector('.cart__items');
const cart = document.querySelector('.cart');
let sumCartItens = 0;
// console.log(btnAddToCart);

const getProducts = async (product) => {
  const list = fetchProducts(product)
  .then((data) => data.results);
  return list;
};

const createProductObject = async (product) => {
  const productList = await Object(getProducts(product));
  
  return productList.map((element) => {
    const objProducts = { sku: '', name: '', image: '' };
    objProducts.sku = element.id;
    objProducts.name = element.title;
    objProducts.image = element.thumbnail;
    return objProducts;
  });
};

const getItems = (item) => {
  const productItem = fetchItem(item)
    .then((data) => data);
    return productItem;
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  cartList.removeChild(event.target);
};

const createStorageCartList = () => {
  const storagedItens = getSavedCartItems();

  if (storagedItens === null) {
    return localStorage.clear();
  }
  storagedItens.forEach((element) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = element;
    li.addEventListener('click', cartItemClickListener);
    return cartList.appendChild(li);
  });

  return storagedItens;
};

const cartSum = (price) => {
  if (!price) {
    // const section = document.createElement('section');
    // section.className = 'total';
    const totalPrice = document.createElement('span');
    totalPrice.className = 'total-price';
    totalPrice.innerText = sumCartItens;
    // section.appendChild(totalPrice);
    return cartList.appendChild(totalPrice);
  }
  
  const totalPrice = document.createElement('span');
  totalPrice.className = 'total-price';
  sumCartItens += price;
  totalPrice.innerText = sumCartItens;
  return cartList.appendChild(totalPrice);
};

// cartSum();

createStorageCartList();

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  saveCartItems('cartItems', li.innerText);
  cartSum(salePrice);
  return cartList.appendChild(li);
};

const createItemObject = async (item) => {
  const itemInfo = await Object(getItems(item));
  const objectItem = { sku: itemInfo.id,
    name: itemInfo.title,
    salePrice: Number(itemInfo.price) };
    
    return createCartItemElement(objectItem);
  };
  
const createCustomElement = (element, className, innerText, sku) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.addEventListener('click', () => {
      createItemObject(sku);
    });
  }
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku));

  return classItems.appendChild(section);
};

const createProductList = async () => {
  const getElementsList = await createProductObject('computer');
  const createElementList = getElementsList.forEach((element) => createProductItemElement(element));
  return createElementList;
};

createProductList();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => { };
