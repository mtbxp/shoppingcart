const myCart = document.querySelector('.cart__items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  myCart.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const toCart = async (event) => {
  const id = getSkuFromProductItem(event.target.parentElement);
  const response = await fetchItem(id);

  myCart.appendChild(createCartItemElement({
    sku: response.id, 
    name: response.title, 
    salePrice: response.price }));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = section.querySelector('button');
  button.addEventListener('click', toCart);
  return section;
};

const itensSection = document.querySelector('.items');

const toLoad = async () => {
  const toSellThem = await fetchProducts('computador');

  toSellThem.forEach(({ id, title, thumbnail }) => itensSection
  .appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail })));
};

window.onload = async () => {
  await toLoad();
};
