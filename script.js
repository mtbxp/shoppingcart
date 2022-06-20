const getClassCartItems = '.cart__Items';
const getElement = document.querySelector(getClassCartItems);
const getClassItems = document.querySelector('.items');
// const getTagOl = document.querySelector(getClassCartItems).textContent;
const button = document.querySelector('.empty-cart')

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

const createListProducts = async () => {
  const getItems = await fetchProducts('computador');
  const elementsItem = getItems.forEach((flag) => {
    const setItems = createProductItemElement(flag);
    document.querySelector('.items').appendChild(setItems);
  });
};

const addItemToCart = (flag) => {
  const elementCart = createCartItemElement(flag);
  elementCart.addEventListener('click', cartItemClickListener);
  getElement.appendChild(elementCart);
};

const eventItems = () => {
  getClassItems.addEventListener('click', (element) => {
    if (element.target.classList.contains('item_add')) {
      const getCode = getSkuFromProductItem(element.target.parentNode);
      fetchItem(getCode)
      .then((dados) => {
        addItemToCart(dados);
        saveCartItems(getTagOl);
      });
    }
  });
};

button.addEventListener('click', () => {
  document.querySelector('ol').innerHTML = '';
});

window.onload = () => { createListProducts(); eventItems(); };
