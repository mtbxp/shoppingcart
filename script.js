// const { fetchProducts } = require('./helpers/fetchProducts');

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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

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

const renderProducts = async () => {
  const elementos = await fetchProducts('computador').then((data) => data.results);
  const sku = elementos.map((esku) => esku.id);
  const name = elementos.map((ename) => ename.title);
  const image = elementos.map((eimage) => eimage.thumbnail);
  const price = elementos.map((eprice) => eprice.price);
  const itemList = [];
  for (let i = 0; i < sku.length; i += 1) {
    itemList.push({ sku: sku[i], name: name[i], image: image[i], salePrice: price[i] });
  }
  const items = document.querySelector('.items');
  itemList.forEach((e) => items.appendChild(createProductItemElement(e)));
  const addButton = document.querySelectorAll('.item__add');
  addButton.forEach((e, n) => e.addEventListener('click', async () => {
    console.log(`clicou no elemento ${n}`);
    // const selectedProduct = await fetchItem(itemList[n].sku);
    const cart = document.querySelector('.cart__items');
    cart.appendChild(createCartItemElement(itemList[n]));
  }));
};

window.onload = async () => {
  await renderProducts();
};
