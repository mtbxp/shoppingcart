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

const addProductToCart = async (event) => {
  const productId = getProductId(event);
  const productObj = await fetchItem(productId);
  const items = document.querySelector('.cart__items');
  const productInfos = { sku: productObj.id, name: productObj.title, salePrice: productObj.price };
  const result = createCartItemElement(productInfos);
  items.appendChild(result);
};

const listOfProducts = async () => {
  const func = await fetchProducts('computador');
  const items = document.querySelector('.items');
  const productsArray = func.results;
  productsArray.forEach((element) => {
    const productObj = { sku: element.id, name: element.title, image: element.thumbnail };
    const result = createProductItemElement(productObj);
    items.appendChild(result);
  });
  const buttonsAddItems = document.querySelectorAll('.item__add');
  buttonsAddItems.forEach((button) => button.addEventListener('click', addProductToCart));
};

window.onload = () => { listOfProducts(); addProductToCart(); };
