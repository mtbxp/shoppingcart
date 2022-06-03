const getItems = document.querySelector('.items');
const getCart = document.querySelector('.cart__items');

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
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = () => {
  fetchProducts('computador').then((flag) => {
    const productsArr = flag.results;
    productsArr.forEach((acc) => {
      const childItem = createProductItemElement(acc);
      getItems.appendChild(childItem);
    });
  });
};

function shoppingCart(flag) {
  const setCart = createCartItemElement(flag);
  setCart.addEventListener('click', (acc) => acc.target.remove());
  getCart.appendChild(setCart);
}

function eventItems() {
  getItems.addEventListener('click', (acc) => {
    if (acc.target.classList.contains('item__add')) {
      const getId = getSkuFromProductItem(acc.target.parentNode);
      fetchItem(getId).then((flag) => shoppingCart(flag));
    }
  });
}

window.onload = () => { 
  createProductList();
  eventItems();
};
