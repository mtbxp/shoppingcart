const getClassCartItems = '.cart__items';
const getClassItems = document.querySelector('.items');
const getTagOl = document.querySelector(getClassCartItems).textContent;
const getElement = document.querySelector(getClassCartItems);
const button = document.querySelector('.empty-cart');
const addMessage = document.createElement('aside');
addMessage.innerHTML = 'carregando...';
addMessage.classList.add('loading');
getClassItems.appendChild(addMessage);

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

const addingItems = (flag) => {
  const elementCart = createCartItemElement(flag);
  elementCart.addEventListener('click', cartItemClickListener);
  getElement.appendChild(elementCart);
};

const eventItems = () => {
  getClassItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('item__add')) {
      const getCode = getSkuFromProductItem(e.target.parentNode);
      fetchItem(getCode).then((dados) => {
        addingItems(dados);
        saveCartItems(getTagOl);
      });  
    }
  });
};

const createListProducts = async () => {
  const getClassLoading = document.querySelector('.loading');
  const getItems = await fetchProducts('computador');
  getClassLoading.remove();
  const elementsItem = getItems.forEach((flag) => {
    const setItems = createProductItemElement(flag);
    document.querySelector('.items').appendChild(setItems);
  });
};

button.addEventListener('click', () => {
  document.querySelector('ol').innerHTML = '';
});

window.onload = () => { createListProducts(); eventItems(); };