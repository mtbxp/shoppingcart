const productsSection = document.querySelector('.items');
const cartSection = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  const li = event.target;
  li.remove();
  saveCartItems(cartSection.innerHTML);
  return li;
};

const removeEvent = () => {
  const li = document.querySelectorAll('.cart__item');
  li.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
};

const createCartList = async (product) => {
  try {
    const data = await fetchItem(product);
    cartSection.appendChild(createCartItemElement(data));
    saveCartItems(cartSection.innerHTML);
  } catch (error) {
    cartSection.innerHTML = `<h1>${error}</h1>`;
  }
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// A função 'buttonEvent' e a condição 'if' na função 'createCustomElement' foram criados com o auxilio e orientação do Vitor Tomaz - Turma 22 - Tribo A, e da Raissa Vasconcelos, Eliel Oliveira, e Gustavo Menezes - Turma 22 - Tribo B ;

const buttonEvent = (event) => {
  const section = event.target.parentElement;
  const id = getSkuFromProductItem(section);
  createCartList(id);
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;

  if (element === 'button') {
    e.addEventListener('click', buttonEvent);
  }

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

const createProductsList = async () => {
  try {
    const data = await fetchProducts('computador');
    data.results.forEach((element) => {
      productsSection.appendChild(createProductItemElement(element));
    });
  } catch (error) {
    productsSection.innerHTML = `<h1>${error}</h1>`;
  }
};

const localStorageInfo = () => {
  cartSection.innerHTML = getSavedCartItems();
  removeEvent();
};

window.onload = () => { 
  createProductsList();
  localStorageInfo();
};
