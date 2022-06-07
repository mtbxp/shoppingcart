const cartItems = document.querySelector('.cart__items');

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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const removeSavedItemInTheStorage = (skuCart) => {
  const storageCartData = getSavedCartItems('cartItems');
  const cartData = JSON.parse(storageCartData);
  const filteredStorage = cartData.filter((item) => item.sku !== skuCart);
  saveCartItems(JSON.stringify(filteredStorage));
  console.log(filteredStorage);
};

const cartItemClickListener = (event) => {
  cartItems.removeChild(event.target);
  const { skuCart } = event.target.dataset;
  removeSavedItemInTheStorage(skuCart);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.setAttribute('data-sku-cart', sku);
  return li;
};

const appendProducts = (productList) => {
  const sectionItems = document.querySelector('.items');
  productList.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const section = createProductItemElement({ sku, name, image });
    sectionItems.append(section);
  });
};

// Checar se já existe para salvar
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

const addItemToCart = (element, sku) => {
  element.addEventListener('click', async () => {
    const { title: name, price: salePrice } = await fetchItem(sku);
    
    const li = createCartItemElement({ sku, name, salePrice });
    li.addEventListener('click', cartItemClickListener);
    cartItems.append(li);

    saveCartDataInStorage({ sku, name, salePrice });
  });
};

const loadCartDataOfStorage = () => {
  const storageCartData = getSavedCartItems('cartItems');
  if (!storageCartData) {
    return;
  }
  const cartData = JSON.parse(storageCartData);
  cartData.forEach(async ({ sku, name, salePrice }) => {
    const li = createCartItemElement({ sku, name, salePrice });
    li.addEventListener('click', cartItemClickListener);
    cartItems.append(li);
  });
};

window.onload = async () => { 
  const data = await fetchProducts('computador').then((response) => response);
  const { results: productList } = data;

  appendProducts(productList);
  loadCartDataOfStorage();

  // referencia sobre Data Attributes : https://www.youtube.com/watch?v=ri-xkk9PuDU
  const buttonsAddCart = document.querySelectorAll('[data-sku]');
  buttonsAddCart.forEach((buttonAddCart) => {
    const { sku } = buttonAddCart.dataset;
    addItemToCart(buttonAddCart, sku);
  });
};
