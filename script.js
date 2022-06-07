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

const createProductItemElement = (sku, name, image) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// Lógica para retirar do carrinho
const cartItemClickListener = (event) => {
  const parentNode = document.querySelector('.cart__items');
  parentNode.removeChild(event.path[0]);
};

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Lógica para adicionar no carrinho
const addingElementToCart = (createCartItem) => {
  const ol = document.querySelector('.cart__items');
  ol.appendChild(createCartItem);
};

const buttonListener = async (event) => {
  const selectedProduct = await fetchItem(event.path[1].childNodes[0].innerText);
  const parameters = [selectedProduct.id, selectedProduct.title, selectedProduct.price];
  saveCartItems(parameters);
  addingElementToCart(createCartItemElement(...parameters));
};

const preparingFunction = async (productName) => {
  if (productName === 'computador') {
    const data = await fetchProducts(productName);
    const arrayProducts = data.results;
    arrayProducts.forEach((product) => {
      const sectionContainer = document.querySelector('.items');
      const parameters = [product.id, product.title, product.thumbnail];
      const sectionProducts = createProductItemElement(...parameters);
      sectionProducts.children[3].addEventListener('click', buttonListener);
      sectionContainer.appendChild(sectionProducts);
    });
  }
};

const gettingSavedCartItems = () => {
  const arrayOfParameters = getSavedCartItems(localStorage.getItem('cartItems'));
  if (arrayOfParameters) {
    arrayOfParameters.forEach((cartItem) => {
      addingElementToCart(createCartItemElement(...cartItem));
    });
  }
};

window.onload = () => {
  preparingFunction('computador');
  gettingSavedCartItems();
};
