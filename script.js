const classCartItems = '.cart__items';
let totalCartProductsPrices = 0;

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

// Lógica para retirar do carrinho
const cartItemClickListener = (event) => {
  const parentNode = document.querySelector(classCartItems);
  parentNode.removeChild(event.path[0]);
  const totalParagraph = document.querySelector('.total-price');
  const price = parseFloat(event.path[0].innerHTML.split('$')[1]);
  totalParagraph.innerHTML -= price;
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
  const ol = document.querySelector(classCartItems);
  ol.appendChild(createCartItem);
};

const buttonListener = async (event) => {
  const selectedProduct = await fetchItem(event.path[1].childNodes[0].innerText);
  const parameters = [selectedProduct.id, selectedProduct.title, selectedProduct.price];
  totalCartProductsPrices += selectedProduct.price;
  const li = createCartItemElement(...parameters);
  addingElementToCart(li);
  const totalParagraph = document.querySelector('.total-price');
  totalParagraph.innerHTML = totalCartProductsPrices;
  const html = document.querySelector(classCartItems).innerHTML;
  saveCartItems(html);
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
  const ol = document.querySelector('ol');
  ol.innerHTML = getSavedCartItems();
  ol.childNodes.forEach((child) => {
    totalCartProductsPrices += parseFloat(child.innerHTML.split('$')[1]);
    child.addEventListener('click', cartItemClickListener);
  });
};

const totalValue = () => {
  const total = document.createElement('p');
  total.innerHTML = totalCartProductsPrices;
  total.className = 'total-price';
  document.querySelector('.cart').appendChild(total);
};

window.onload = () => {
  preparingFunction('computador');
  gettingSavedCartItems();
  totalValue();
};
