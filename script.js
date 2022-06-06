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

const createItems = (item) => {
  const items = document.querySelector('.items');
  items.append(item);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (list) => {
  // coloque seu código aqui
  if (list.target !== undefined) {
    list.target.remove();
  }
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createItemElement = (item) => {
  const cart = document.querySelector('.cart__items');
  cart.append(item);
};

const addToCartListener = () => {
  const addToCart = document.querySelectorAll('.item__add');
  addToCart.forEach((item) => item.addEventListener('click', (event) => {
    idElement = event.target.parentElement.firstChild.innerText;
    fetchItem(idElement).then((result) => {
      const obj = {
        sku: result.id,
        name: result.title,
        salePrice: result.price,
      };
      const myLi = createCartItemElement(obj);
      cartItemClickListener(myLi);
      createItemElement(myLi);
    });
  }));
};

fetchProducts('computador').then((result) => {
  result.forEach((product) => {
  const obj = {
    sku: product.id,
    name: product.title,
    image: product.thumbnail,
  };
  const myElement = createProductItemElement(obj);
  createItems(myElement);
  });
  addToCartListener();
});

window.onload = () => { };
