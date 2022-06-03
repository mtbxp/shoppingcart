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

function putElementInSection({ sku, name, image }) {
  const sectionFather = document.getElementsByClassName('items')[0];
  const section = createProductItemElement({ sku, name, image });
  sectionFather.appendChild(section);
}

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

const createItems = async () => {
 const array = [];
   const data = await fetchProducts();
   data.results.forEach((item) => {
    array.push({ sku: item.id, name: item.title, image: item.thumbnail });
  });
  array.forEach((item) => {
  createProductItemElement(item);
  putElementInSection(item);
  });
};

window.onload = () => { 
  createItems();
};
