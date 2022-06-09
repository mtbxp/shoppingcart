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

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getItemsInfos = async () => {
  const { results } = await fetchProducts('computador');
  const productsInfos = [];
  results.forEach((result) => {
    productsInfos.push({
      sku: result.id,
      name: result.title,
      image: result.thumbnail }); 
  });
  return productsInfos;
};

const appendProductsElements = async () => {
  const itemsSection = document.querySelector('.items');
  (await getItemsInfos()).forEach((item) => {
    itemsSection.appendChild(createProductItemElement(item));
  });
};

const getCartProductInfos = async () => {
  const cartItem = await fetchItem('MLB1341706310');
  const cartItemInfos = {
    sku: cartItem.id,
    name: cartItem.title,
    salePrice: cartItem.price };
  return cartItemInfos;
};

const appendItemToCart = async () => {
  const cart = document.querySelector('.cart__items');
  cart.appendChild(createCartItemElement(await getCartProductInfos()));
};

window.onload = async () => { 
  await appendProductsElements();
  await appendItemToCart();
};