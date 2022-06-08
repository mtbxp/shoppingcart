const cartList = document.querySelector('.cart__items');
const listaDeItens = document.querySelector('.items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartList.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const EventOnItem = (event) => {
  const sku = getSkuFromProductItem(event.target.parentNode);
  fetchItem(sku).then((item) => {
    cartList.appendChild(createCartItemElement(item));
    saveCartItems(cartList.innerHTML);
  });
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', EventOnItem);

  return section;
};

const createProductList = async () => {
  const fetch = await fetchProducts('computador');
  const fetchProduct = fetch.results;
  fetchProduct.forEach((element) => {
    const item = createProductItemElement(element);
    listaDeItens.appendChild(item);
  });
};

const requisição = () => {
  const olHtml = document.querySelector('.cart__items');
  olHtml.innerHTML = getSavedCartItems();
  olHtml.addEventListener('click', cartItemClickListener);
};

// para salvar no storage você precisa fazer ele salvar na key conseguir o value e assim fazer ele ficar salvo, para acessar ele precisamos fazer isso por click onde caso contenha um produto ele rpecisa ser adicionado ao valor e se não for ser deixado de lado 

  window.onload = () => { 
  createProductList();
  requisição();
};
