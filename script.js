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
// ___________________________________________________________________
// Para um unico requisito!!!!
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
 // __________________________________________________________________

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const li = event.target;
  li.remove();
};

const cartItem = document.getElementsByClassName('cart__item');

for (let index = 0; index < cartItem.length; index += 1) {
  cartItem[index].addEventListener('click', cartItemClickListener);
}

// ___________________________________________________________________
// Para um unico requisito!!!

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

function putElementInOl({ sku, name, salePrice }) {
  const olFather = document.getElementsByClassName('cart__items')[0];
  const li = createCartItemElement({ sku, name, salePrice });
  olFather.appendChild(li);
}

function getID(event) {
  const button = event.target;
  const parent = button.parentNode;
  fetchItem(getSkuFromProductItem(parent))
  .then((data) => {
  const obj = { sku: data.id, name: data.title, salePrice: data.price };
  createCartItemElement(obj);
  putElementInOl(obj);
  });
}

const getButtons = () => {
  let buttons = [];
  buttons = document.getElementsByClassName('item__add');
  for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', getID);
  }
};
// ___________________________________________________________________

window.onload = () => { 
  createItems()
  .then(getButtons);
};
