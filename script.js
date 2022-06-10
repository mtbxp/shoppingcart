const productToAppend = document.querySelector('.items');
const productToAppendInCart = document.querySelector('.cart__items');
// let totalValueOfPurchase;

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

// const getSkuFromProductItem = () =>
// item.querySelector('span.item__sku').innerText;
// getSkuFromProductItem();

const cartItemClickListener = (item) => {
  item.target.remove();
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
  productToAppendInCart.appendChild(itemToSend);
};

const createElement = async () => {
  await fetchProducts('computador')
    .then((products) => products.results
    .forEach((product) => {
      const createSectionofProduct = createProductItemElement(product);
      createSectionofProduct.lastChild.addEventListener('click', sendToCart);
      productToAppend.appendChild(createSectionofProduct);
    }));
};

// const totalValue = () => {
//   const getProducts = document.querySelector('.cart__items');
//   const toArray = getProducts.forEach((addProduct) => addProduct);
//   totalValueOfPurchase = toArray;
// };

const removeAllElements = () => {
  const getAllProductsInTheCart = document.querySelector('.cart__items');
  getAllProductsInTheCart.remove();
  const reCreateOl = document.querySelector('.cart');
  const createOl = document.createElement('ol');
  createOl.className = 'cart__items';
  reCreateOl.appendChild(createOl);
};

const emptyCart = async () => {
  const getEmptyButton = document.querySelector('.empty-cart');
  getEmptyButton.addEventListener('click', removeAllElements);
};
emptyCart();

// const totalPrice = async () => {
//   const getTotalPriceElement = document.querySelector('.total-price');
//   getTotalPriceElement.innerText = `${totalValueOfPurchase}`;
// };
// totalPrice();

window.onload = () => {
  createElement();
};
