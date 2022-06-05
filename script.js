const Cart = document.querySelector('.cart__items');
const caIt = document.querySelector('.items');
const but = document.querySelector('.empty-cart');
const cEle = document.createElement('p');
const select = document.querySelector('.cart');
cEle.classList.add('total-price');
select.appendChild(cEle);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(ele, classe, texto) {
  const e = document.createElement(ele);
  e.className = classe;
  e.innerText = texto;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function cartItemClickListener(event) {
  const citem = event.target;
  citem.remove();
  saveCartItems(Cart.innerHTML);
}
const counter = (test) => {
  cEle.innerText = parseFloat(Number(cEle.innerText) + Number(test));
};

function createCartItemElement({ id: sku, title: name, price: salePrice, thumbnail }) {
  const li = document.createElement('li');
  li.className = 'itemNoCarrinho';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = thumbnail;
  li.appendChild(img);
  li.addEventListener('click', cartItemClickListener);
  counter(salePrice);
  return li;
}

const load = async () => {
  const span = document.createElement('span');
  span.classList.add('loading');
  span.innerHTML = 'loading****';
  Cart.appendChild(span);
};
const rload = async () => {
  const loading = document.querySelector('.loading');
  return loading.remove();
};
const criaarrey = async () => {
  load();
  const lista = await fetchProducts('computador');
  rload();
  const filtrarItems = lista.results.map(({ id, title, thumbnail, price }) =>
    ({ sku: id, name: title, image: thumbnail, preço: price }));
  filtrarItems.forEach((e) =>
    caIt.appendChild(createProductItemElement(e)));
};

const criarshop = async (id1) => {
  load();
  const item = await fetchItem(id1);
  rload();
  Cart.appendChild(createCartItemElement(item));
  saveCartItems(Cart.innerHTML);
};

const getIdItem = (item) => item.target.parentNode.firstChild.innerHTML;
const adc = () =>
   document.addEventListener('click', (item) => {
    if (item.target && item.target.classList.contains('item__add')) {
      criarshop(getIdItem(item));
    }
    if (item.target && item.target.classList.contains('cart__item')) {
      cartItemClickListener(item);
    }
  });
const rall = () => but.addEventListener('click', () => {
  Cart.innerHTML = '';
  cEle.innerHTML = '';
  preco = [];
});
function carrinhho() {
  const iHTMLcartI = getSavedCartItems();
  Cart.innerHTML = iHTMLcartI;
}

window.onload = () => {
  carrinhho();
  criaarrey();
  adc();
  rall();
};