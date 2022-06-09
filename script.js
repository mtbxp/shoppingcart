const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

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

const appendChildItems = () => {
  const results = fetchProducts('computador')
    .then((element) => element.results
      .forEach((el) => items.appendChild(createProductItemElement(el))));
  return results;
};
// appendChildItems();
const createTextLoading = async () => {
  const sectionText = document.querySelector('.textLoading');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = 'carregando...';
  paragrafo.className = 'loading';
  sectionText.appendChild(paragrafo);
  await appendChildItems();
  paragrafo.remove();
};
createTextLoading();

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
};
cartItems.innerHTML = getSavedCartItems();
cartItems.childNodes.forEach((el) => el.addEventListener('click', cartItemClickListener));

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const addChildCreateCart = (param) => {
  fetchItem(param).then((el) => {
    cartItems.appendChild(createCartItemElement(el));
    saveCartItems(cartItems.innerHTML);
  });
};
  document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const section = event.target.parentNode.firstChild.innerText;
    addChildCreateCart(section);
  }
});
const buttonEsvaziarCarrinho = document.querySelector('.empty-cart');
buttonEsvaziarCarrinho.addEventListener('click', () => {
  cartItems.innerHTML = '';
  localStorage.clear();
});
window.onload = () => { };
