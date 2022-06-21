const getClassCartItems = document.querySelector('.cart__items');
// const getClassItems = document.querySelector('.items');
const button = document.querySelector('.empty-cart');

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

const cartItemClickListener = (event) => {
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function idIdentifier(event) {
  const pressedComputer = event.target.parentNode.firstChild.innerText;
  const wantedComuputer = await fetchItem(pressedComputer);
  const infoForCart = createCartItemElement(wantedComuputer);
  return getClassCartItems.appendChild(infoForCart);
}

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', idIdentifier);

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createListProducts = async () => {
  const getItems = await fetchProducts('computador');
  const elementsItem = getItems.forEach((flag) => {
    const setItems = createProductItemElement(flag);
    document.querySelector('.items').appendChild(setItems);
  });
};

button.addEventListener('click', () => {
  document.querySelector('ol').innerHTML = '';
});

window.onload = () => { createListProducts(); };
