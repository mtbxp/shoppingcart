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
const cartItemClickListener = (event) => { 
const o = event.target;
o.innerText = '';
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

fetchProducts('computador').then((pc) =>
 pc.results.map((element) => ({ sku: element.id,
  name: element.title, 
  image: element.thumbnail })).map((computer) => 
 document.getElementsByClassName('items')[0].appendChild(createProductItemElement(computer))));

 const meuCarrinho = async () => {
  const cartItem = document.getElementsByClassName('cart__items')[0];
  const carrinho = await fetchItem('MLB1615760527').then((trem) => 
  ({ sku: trem.id, name: trem.title, salePrice: trem.price }));
  cartItem.appendChild(createCartItemElement(carrinho));
 };
meuCarrinho();

window.onload = () => {};
