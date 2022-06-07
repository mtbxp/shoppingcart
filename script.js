/* Represents the list with items to be selected */

const itemsList = document.querySelector('.items');

/* Represents the list of selected items */

const cartItemsList = document.querySelector('.cart__items');

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

const removeCartProduct = (selectedProduct) => {
  selectedProduct.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', removeCartProduct);
  return li;
};

/* It gets all the fetched products according to the data
base. As productData.results is an array with objects, forEach
was selected to created an element for each product found */

const generateFetchedProducts = async () => {
  const productsData = await fetchProducts('computador');
  const allFetchedProducts = productsData.results;
  allFetchedProducts.forEach((fetchedProduct) => {
    const generateProduct = createProductItemElement(fetchedProduct);
    itemsList.appendChild(generateProduct);
  });
};

/* Created to remove all products selected previously. Only called
inside the function generateCartProduct, since it only can remove 
an element after its selection as a desired product */

const removeAllCartProducts = () => {
  const cartItem = document.querySelectorAll('.cart__item');
  const emptyCartButton = document.querySelectorAll('.empty-cart');
  emptyCartButton.forEach((button) => {
    button.addEventListener('click', () => {
      cartItem.forEach((item) => {
        item.remove();
    });
  });
  });
};

/* After clicking, getSkuFromProductItem gets the product id. That
id is used as argument to the async function fetchItem, which
returns the product info found in the data base. */

const generateCartProduct = () => {
  const addProductButtons = document.querySelectorAll('.item__add');
  addProductButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const productId = getSkuFromProductItem(button.parentElement);
      const { id: sku, title: name, price: salePrice } = await fetchItem(productId);
      const selectedProductInfo = createCartItemElement({
        id: sku,
        title: name,
        price: salePrice });
      cartItemsList.appendChild(selectedProductInfo);
      removeAllCartProducts();
    });
  });
};

window.onload = async () => {
  await generateFetchedProducts();
  generateCartProduct();
};