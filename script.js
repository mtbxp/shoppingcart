const productToAppend = () => document.querySelector('.items');
const getAllProducts = () => document.querySelector('.cart__items');
const everyProductInCart = () => document.querySelectorAll('.cart__item');
const separatorOfValues = '$';

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

const createProductItemElement = ({ id: sku, title: name, price: salePrice, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const appendTotalCartValue = (param) => {
  const getTotalElement = document.querySelector('.total-price');
  getTotalElement.innerHTML = param;
  return getTotalElement;
};

const getTotalCartValue = () => {
  const allProductsOfCart = everyProductInCart();
  const arrayOfProducts = Array.from(allProductsOfCart);
  
  const ValuesOfPurchase = arrayOfProducts.reduce((acc, product) => {
    const productText = product.innerText;
    const purchaseValue = productText.split(separatorOfValues, 7)[1];
    const toNumber = Number(purchaseValue);
    const totalPurchaseValue = acc + toNumber;
    
    return totalPurchaseValue;
  }, 0);
  
  return appendTotalCartValue(ValuesOfPurchase);
};

const cartItemClickListener = (item) => {
  item.target.remove();
  getTotalCartValue();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sendToCart = async (event) => {
  const rescueElementId = event.target.parentNode.firstChild.innerText;
  const productInfo = await fetchItem(rescueElementId);
  const itemToSend = createCartItemElement(productInfo);
  const products = getAllProducts();
  products.appendChild(itemToSend);
  getTotalCartValue();
};

const createElement = async () => {
  await fetchProducts('computador')
    .then((products) => products.results
    .forEach((product) => {
      const createSectionofProduct = createProductItemElement(product);
      createSectionofProduct.lastChild.addEventListener('click', sendToCart);
      const products2 = productToAppend();
      products2.appendChild(createSectionofProduct);
    }));
};

const removeAllElements = () => {
  const product = getAllProducts();
  product.remove();
  const reCreateOl = document.querySelector('.cart');
  const createOl = document.createElement('ol');
  createOl.className = 'cart__items';
  reCreateOl.appendChild(createOl);
  getTotalCartValue();
};

const emptyCart = async () => {
  const getEmptyButton = await document.querySelector('.empty-cart');
  getEmptyButton.addEventListener('click', removeAllElements);
};
emptyCart();

window.onload = () => {
  createElement();
};
