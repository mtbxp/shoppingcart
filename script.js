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

const cartItemClickListener = async (event) => {};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Obtive ajuda nesses exercícios
const getItemsInfo = async () => {
  const response = await fetchProducts('computador');
  const { results } = response;

  const productsInfo = [];

  results.forEach((item) => {
    const { id: sku, title: name, thumbnail: image } = item;

    productsInfo.push({ sku, name, image });
  });

  return productsInfo;
};

const createListProducts = async () => {
  const items = document.querySelector('.items');

  (await getItemsInfo()).forEach((item) => {
    items.appendChild(createProductItemElement(item));
  });
};

const starting = () => {
  createListProducts();
};

window.onload = () => { starting(); };
