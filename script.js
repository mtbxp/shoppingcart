const eachItem = document.getElementsByClassName('item'); /* Represents each item of the list */
const itemsList = document.querySelector('.items'); /* Represents the list with items to be selected */
const cartItemsList = document.querySelector('.cart__items'); /* Represents the list of selected items */

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

const generateFetchedProducts = async () => {
  const productsData = await fetchProducts('computador');
  const allFetchedProducts = productsData.results;
  allFetchedProducts.forEach((fetchedProduct) => {
    const generateProduct = createProductItemElement(fetchedProduct);
    itemsList.appendChild(generateProduct);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = async (event) => {
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const generateCartProduct = async () => {
  const addProductButtons = document.querySelectorAll('.item__add');
  addProductButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const productId = getSkuFromProductItem(button.parentElement);
      const { id: sku, title: name, price: salePrice } = await fetchItem(productId);
      const selectedProductInfo = await createCartItemElement({
        id: sku,
        title: name,
        price: salePrice });
      cartItemsList.appendChild(selectedProductInfo);
    });
  });
};

window.onload = async () => {
  await generateFetchedProducts();
  generateCartProduct();
};
