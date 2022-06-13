const cartItems = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const emptycartButton = document.querySelector('.empty-cart');
const container = document.querySelector('.container');

let totalValueOfItemsInCart = 0;

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
  
  const buttom = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttom.setAttribute('data-sku', sku);
  section.appendChild(buttom);

  return section;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.setAttribute('data-sku-cart', sku);
  return li;
};

const calculateAndShowTotal = (price, subtract = false) => {
  if (subtract) {
    totalValueOfItemsInCart -= price;
  } else {
    totalValueOfItemsInCart += price;
  }
  // const formatedPrice = totalValueOfItemsInCart.toLocaleString('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // });
  // totalPrice.innerText = `Total: ${formatedPrice}`;
  totalPrice.innerText = totalValueOfItemsInCart;
};

const appendProducts = (productList) => {
  const sectionItems = document.querySelector('.items');

  productList.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const section = createProductItemElement({ sku, name, image });
    sectionItems.append(section);
  });
};

const removeSavedItemInTheStorage = (skuCart) => {
  const storageCartData = getSavedCartItems('cartItems');
  const cartData = JSON.parse(storageCartData);
  const filteredStorage = cartData.filter((item) => { 
    if (item.sku === skuCart) {
      calculateAndShowTotal(item.salePrice, true);
    }
    return item.sku !== skuCart;
  });
  saveCartItems(JSON.stringify(filteredStorage));
};

const saveCartDataInStorage = (data) => {
  let cartData = [];
  const storageCartData = getSavedCartItems('cartItems');
  if (!storageCartData) {
    cartData.push(data);
    saveCartItems(JSON.stringify(cartData));
  }
  cartData = JSON.parse(storageCartData);
  cartData.push(data);
  saveCartItems(JSON.stringify(cartData));
};

const removeItemToCart = (event) => {
  const { skuCart } = event.target.dataset;
  removeSavedItemInTheStorage(skuCart);
  cartItems.removeChild(event.target);
};

const addItemToCart = ({ sku, name, salePrice }) => {
  const li = createCartItemElement({ sku, name, salePrice });
  li.addEventListener('click', removeItemToCart);
  cartItems.append(li);
};

// const checkSkuExist = (sku) => {
//   const storageCartData = getSavedCartItems('cartItems');
//   const cartData = JSON.parse(storageCartData);
//   const exist = cartData.find((item) => item.sku === sku);
//   if (exist) {
//     return true;
//   }
//   return false;
// };

const handleAddItem = async (event) => {
  const { sku } = event.target.dataset;
  const { title: name, price: salePrice } = await fetchItem(sku);
  // const existSku = checkSkuExist(sku);

  // if (existSku) {
  //   return;
  // }

  addItemToCart({ sku, name, salePrice });
  calculateAndShowTotal(salePrice);
  saveCartDataInStorage({ sku, name, salePrice });
};

const addEventListenerInButtons = () => {
  const buttonsAddCart = document.querySelectorAll('[data-sku]');

  buttonsAddCart.forEach((buttonAddCart) => {
    buttonAddCart.addEventListener('click', handleAddItem);
  });
};

const clearItemsInTheCart = () => {
  cartItems.innerText = '';
  totalValueOfItemsInCart = 0;
  totalPrice.innerText = 'Total: R$ 0,00';
  saveCartItems('[]');
};

const loadCartDataOfStorage = () => {
  const storageCartData = getSavedCartItems('cartItems');
  if (!storageCartData) {
    return;
  }
  const cartData = JSON.parse(storageCartData);
  cartData.forEach(({ sku, name, salePrice }) => addItemToCart({ sku, name, salePrice }));
};

const addLoading = () => {
  const p = document.createElement('p');
  p.innerText = 'Carregando...';
  p.className = 'loading';
  container.appendChild(p);
};

const removeLoading = () => {
  const loading = document.querySelector('.loading');
  container.removeChild(loading);
};

emptycartButton.addEventListener('click', clearItemsInTheCart);

window.onload = async () => { 
  addLoading();
  const data = await fetchProducts('computador').then((response) => response);
  removeLoading();

  const { results: productList } = data;

  appendProducts(productList);
  loadCartDataOfStorage();
  addEventListenerInButtons();
};
