const sectionItens = document.querySelector('.items');
const cartItens = document.querySelector('.cart__items');
// const cartSection = document.querySelector('.cart');

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
  if (event.target.className === 'cart__item') {
    cartItens.removeChild(event.target);
  }
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

fetchProducts('computador').then((data) =>
data.results.forEach((product) => {
  sectionItens.appendChild(createProductItemElement(product));
}));

function addItemToCart() {
  document.addEventListener('click', (event) => {
    if (event.target.className === 'item__add') {
      const id = event.target.parentElement.firstChild.innerHTML;   
      
      fetchItem(id).then((data) =>
      cartItens.appendChild(createCartItemElement(data)));  
    }
  });
}

// fetchItem('MLB1341706310').then((data) => console.log(data));
// fetchItem(id).then((data) => console.log(data));
// fetchProducts('computador').then((data) => console.log(data));

window.onload = () => {
  addItemToCart();
};
