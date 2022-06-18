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

const createProductItemElement = ({ sku, name, image, salePrice }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cart = document.querySelector('ol.cart__items');

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const cartItem = event.target;
  cartItem.remove();
  saveCartItems('');
  saveCartItems(cart.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const products = async () => {
  const items = document.querySelector('.items');
  const { results } = await fetchProducts('computador');
  return results.map((item) => {
    const { id: sku, title: name, thumbnail: image, price: salePrice } = item;
    items.appendChild(createProductItemElement({ sku, name, image, salePrice }));
    return items;
  });
};

const getProductsForCartItem = async (event) => {
  const item = event.target.parentElement;
  const id = getSkuFromProductItem(item);
  const data = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = data;
  cart.appendChild(createCartItemElement({ sku, name, salePrice }));
  saveCartItems(cart.innerHTML);
  return cart;
};

const productsListener = () => document.querySelectorAll('button.item__add')
  .forEach((element) => {
    element.addEventListener('click', getProductsForCartItem);
  });

const loadCart = () => {
 const cartItems = getSavedCartItems();
 cart.innerHTML = cartItems;
 document.querySelectorAll('li.cart__item')
  .forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

window.onload = async () => { await products(); productsListener(); loadCart(); };
