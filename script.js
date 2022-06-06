const sectionItems = document.getElementsByClassName('items')[0];

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

const listagem = async (index) => {
  const data = await fetchProducts('computador');

  const sku = data.results[index].id;
  const name = data.results[index].title;
  const image = data.results[index].thumbnail;

  return { sku, name, image };
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

// const cartItemClickListener = (event) => {
//   // coloque seu código aqui
// };

// const createCartItemElement = ({ sku, name, salePrice }) => {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
//   li.addEventListener('click', cartItemClickListener);
//   return li;
// };

window.onload = async () => {
  for (let index = 0; index < 12; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    sectionItems.appendChild(createProductItemElement(await listagem(index)));
  }
};