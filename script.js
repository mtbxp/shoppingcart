const importItems = document.querySelector('.items');
const elementClass = document.querySelector('.cart__items');

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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
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
    event.target.remove();
  };

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

function productsItems() {
  fetchProducts('computador').then((items) => {
  items.results.forEach((itemChild) => {
  importItems.appendChild(createProductItemElement(itemChild));
});
});
}
const elementChild = (element) => {
  fetchItem(element).then((itemsId) => 
  elementClass.appendChild(createCartItemElement(itemsId)));
}; 
importItems.addEventListener('click', async (event) => {
  if (event.target.classList.contains('item__add')) {
    const findItem = event.target.parentNode.firstChild.innerHTML;
    await elementChild(findItem); 
  }
});

window.onload = () => { 
  productsItems();
  
};