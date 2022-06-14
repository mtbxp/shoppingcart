const sectionItems = document.querySelector('.items');
const sectionCart = document.querySelector('.cart__items');

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

const itemsLocalStorage = () => {
  const textToBeSaved = sectionCart.innerHTML;
  saveCartItems(textToBeSaved);
};

const somaToralVal = () => {
  let soma = 0;
  const precoTotal = document.querySelector('.total-price');
  const uploadedList = document.querySelectorAll('li');

  uploadedList.forEach((item) => {
    soma += parseFloat(item.innerText.split('$')[1] * 100);
  });
  precoTotal.innerHTML = (soma / 100);
};

const clearnerCart = (event) => {
  event.target.remove();
  itemsLocalStorage();
  somaToralVal();
};

const loadLocalData = () => {
  const ItensSalvos = getSavedCartItems();
  sectionCart.innerHTML = ItensSalvos;
  const lis = document.querySelectorAll('li');
  lis.forEach((item) => {
    item.addEventListener('click', clearnerCart);
  });
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', clearnerCart);
  return li;
};

const renderCarregando = () => {
  const carregando = document.createElement('span');
  carregando.innerHTML = 'carregando...';
  carregando.className = 'loading';
  document.querySelector('.items').appendChild(carregando);
};

const clearCarregando = () => document.querySelector('.loading').remove();

const createItemsList = async () => {
  renderCarregando();
  await fetchProducts('computador').then(({ results }) => {
    clearCarregando();
    results.forEach((product) => {
      sectionItems.appendChild(createProductItemElement(product));
    });
  });
};

const adicao = (info) => {
  sectionCart.appendChild(createCartItemElement(info));
  somaToralVal();
};

const addEventToProducts = async (event) => {
  const id = getSkuFromProductItem(event.target.parentNode);
  await fetchItem(id).then((data) => adicao(data));
  itemsLocalStorage();
};

const addItemsToCart = () => {
  sectionItems.addEventListener('click', addEventToProducts);
};

const limpaCarrinho = () => {
  const uploadedLista = document.querySelectorAll('.cart__item');
  uploadedLista.forEach((item) => item.remove());
  localStorage.clear('cartItems');
  somaToralVal();
};

const funcaoBotao = () => {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', limpaCarrinho);
};

window.onload = () => {
  createItemsList();
  addItemsToCart();
  loadLocalData();
  funcaoBotao();
};
