const sectionItens = document.querySelector('.items');

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

const createProductItemElement = ({
  id,
  title,
  thumbnail,
}) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código a
};

const createCartItemElement = ({ id, title, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: $ id} | NAME: $ title} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// fetchProducts('computador').then((data) => console.log(data));

fetchProducts('computador').then((data) =>
  data.results.forEach((product) => {
    sectionItens.appendChild(createProductItemElement(product));
  }));

window.onload = () => {};
