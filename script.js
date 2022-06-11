// @ts-nocheck
 const classCardItems = '.cart__items';
 const subValue = '.total-price';
 const cleanCart = '.empty-cart';

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
// codigo remover Items do carrinho
const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};
// Limpar o carrinho de compras
const cleanCartClickListener = () => {
  const cart = document.querySelector(classCardItems);
  cart.innerHTML = getSavedCartItems();
  document.querySelector(cleanCart).addEventListener('click', () => {
    localStorage.clear();
    document.querySelector(classCardItems).innerHTML = '';
  });
};

// Calcule o valor total dos itens do carrinho de compras
const calculateTotal = () => {
  totalValue = 0;
  const total = document.querySelector(subValue);
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((element) => {
    totalValue += parseFloat(element.innerHTML.split('$')[1], 10);
    document.querySelector(classCardItems).addEventListener('click', calculateTotal);
  });
  total.innerHTML = `${totalValue}`;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// Adicionar lista de produtos no site
const addProductsToSite = async () => {
  const items = document.querySelector('.items');
  const products = await fetchProducts('computador');
  const listProduct = products.results;
  listProduct.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const item = createProductItemElement({ sku, name, image });
    items.appendChild(item);
  });
};
// Salvar o carrinho de compras no localStorage
const saveCart = () => {
  const cart = document.querySelector(classCardItems).innerHTML;
  saveCartItems(cart);
};
// Carregar o a página do localStorage
const loadCart = () => {
  document.querySelector(classCardItems).innerHTML = getSavedCartItems();
  document.querySelector(classCardItems).addEventListener('click', cartItemClickListener);
};
// Adicionar o Produto ao Carringo de Compras
const addProductsToCarrinho = async (event) => {
  const carts = document.querySelector('.cart__items');
  const itemId = getSkuFromProductItem(event.target.parentElement);
  const productId = await fetchItem(itemId);
  const { id: sku, title: name, price: salePrice } = productId;
  const cartItem = createCartItemElement({ sku, name, salePrice });
  carts.appendChild(cartItem);

  saveCart();
  calculateTotal();
};

window.onload = async () => {
  await addProductsToSite();
  loadCart();
  cleanCartClickListener();

// Adicionando o Botao na captura dos items
const addButtonsItem = document.querySelectorAll('.item__add');
addButtonsItem.forEach((button) => button.addEventListener('click', addProductsToCarrinho));
};
