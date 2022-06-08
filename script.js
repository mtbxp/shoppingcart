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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');  
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Abaixo estão as funções criadas para implementação no HTML (Funções criadas por mim);

/* As duas funções abaixo são responsaveis por colocar as propriedades devidas dos itens do localstorge e colocar os itens no carrinho  */

const setPropritesLocalStorage = (arr) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = arr;
  li.addEventListener('click', cartItemClickListener);
  cartItems.appendChild(li);
};

const sendLocalStorageToCartItens = () => {
  const localStorage = getSavedCartItems('cartItems');
  if (localStorage) {
    localStorage.forEach((element) => setPropritesLocalStorage(element));
  }
};

// As funções abaixo colocam os dados da Api do ML no html;

const products = async () => {
  const produtos = await fetchProducts('computador');
  const { results } = produtos;
  return results;
};

const sendApiToSite = async () => {
  sendLocalStorageToCartItens();
  const listaDeItems = document.querySelector('.items');
  const produtos = await products();
  produtos.map((element) => {
    const map = createProductItemElement(element);
  return listaDeItems.appendChild(map);
  });
};

// A função abaixo coloca o produto selecionado no carrinho de compras;

const sendToCartItem = () => {
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('item__add')) {
      const idProduct = getSkuFromProductItem((e.target.parentNode));
      const obj = await fetchItem(idProduct);
      const li = createCartItemElement(obj);
      cartItems.appendChild(li);
      saveCartItems(cartItems);
    }
  });
};

window.onload = () => {
  sendToCartItem();
  sendApiToSite();
};
