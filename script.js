const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemCart = async (param) => {
  const obj = await fetchItem(param);
  const ol = document.querySelector('.cart__items');
  const { id, title, price } = obj;
  const obj2 = { sku: id, name: title, salePrice: price };
  ol.appendChild(createCartItemElement(obj2));
};

const createButton = (sku) => {
  const button = document.createElement('button');
  button.className = 'item__add';
  button.innerText = 'Adicionar ao carrinho!';
  button.addEventListener('click', async () => {
    await addItemCart(sku);
  });
  return button;
};

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

const createProductItemElement = async ({ sku, name, image }) => {
  const button = await createButton(sku);
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(button);

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// //////////////////////////////////////////////////////////////////////////////

const creatProductList = async () => {
  const obj = await fetchProducts('computador');
  const section = document.querySelector('.items');
  obj.results.map(async (item) => {
    const { id, title, thumbnail } = item;
    const obj2 = { sku: id, name: title, image: thumbnail };
    const produtos = await createProductItemElement(obj2);
    return section.appendChild(produtos);
  });
};

// const idArray = () => {
//   const span = document.querySelectorAll('.item__sku');
//   const obj = Object.values(span);
//   const ids = obj.map((id) => id.innerText);
//   return ids
// };

// const idItem = () => {
//   const li = await creatItemCart(id);
//   const ol = document.querySelector('.cart__items');
//   const button = document.querySelectorAll('.item__add');
//   const callback = () => ol.appendChild(li);
//   button.addEventListener('click', callback);
// };

window.onload = () => {
  creatProductList();
};
