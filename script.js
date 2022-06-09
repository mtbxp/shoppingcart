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
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho'));

  return section;
};

// eslint-disable-next-line no-unused-vars
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// eslint-disable-next-line no-unused-vars
const cartItemClickListener = (event) => {
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const computadorProduct = document.querySelector('.items');

const renderProduct = async () => {
  const loading = document.querySelector('.loading');
  const product = await fetchProducts('computador');
  try {
  product.results.forEach((item) => {
    const objProduct = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    loading.remove();
    const listProduct = createProductItemElement(objProduct);
    computadorProduct.appendChild(listProduct);
  });
  } catch (error) {
    computadorProduct.innerHTML = `<h2>${error}</h2>`;
  }
};

const appendItem = (product) => {
  const shoppingCart = document.querySelector('.cart__items');
  shoppingCart.addEventListener('click', (cart) => {
  cart.target.remove();
});
  shoppingCart.appendChild(createCartItemElement(product));
};

const addItemToCart = () => {
  computadorProduct.addEventListener('click', (event) => {
    const productList = getSkuFromProductItem(event.target.parentNode);
    fetchItem(productList).then((element) => appendItem(element));
  });
};

const listCart = document.querySelector('ol');
document.querySelector('.empty-cart').addEventListener('click', () => {
  listCart.innerHTML = '';
});

window.onload = () => {
   renderProduct();
   addItemToCart();
};