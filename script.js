const cartI = '.cart__items';
const cartF = '.cart__item';

const fromLocalStorage = () => {
  const acharPai = document.querySelector(cartI);
  const textoOl = acharPai.innerHTML;
  saveCartItems(textoOl);
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const alvo = event.target;
  console.log(alvo); // Vou deixar este console.log para informar que o valor foi corretamente removido
  alvo.remove();
  fromLocalStorage();
};

const createCartItemElement = ({ id: sku, title: xname, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${xname} | PRICE: $${salePrice}`;
  // li.onclick = cartItemClickListener();
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const itemContinue = async (element) => {
  const alvo = (element.target);
  const infoC = getSkuFromProductItem(alvo.parentElement);
  const infoD = await fetchItem(infoC);
  const { id, title, price } = infoD;
  const acharPai = document.querySelector('.cart__items');
  acharPai.appendChild(createCartItemElement({ id, title, price }));
  fromLocalStorage();
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  
  if (element === 'button') e.addEventListener('click', itemContinue);
  return e;
};

const createProductItemElement = ({ id: sku, title: xname, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', xname));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const fetchContinue = async (element) => {
  // Vou colocar aqui o Id, title e tumbnail, mas primeiro separar o result
  const { results } = await fetchProducts(element);
  const acharPai = document.querySelector('.items');
  // vou criar um forEach para fazer as sections
  results.forEach(((resultado) => {
    const { id, title, thumbnail } = resultado;
    acharPai.appendChild(createProductItemElement({ id, title, thumbnail }));
  }));
};

const bottoneEpty = () => {
  const acharPai = document.querySelector(cartI);
  acharPai.innerHTML = '';
  fromLocalStorage();
};

const finalLocalStorage = () => {
  const acharPai = document.querySelector(cartI);
  acharPai.innerHTML = localStorage.cartItems;
  const acharFilhos = document.querySelectorAll(cartF);
  acharFilhos.forEach((acc) => {
    acc.addEventListener('click', cartItemClickListener);
  });
};

window.onload = () => {
  fetchContinue('computador');
  finalLocalStorage();
};
