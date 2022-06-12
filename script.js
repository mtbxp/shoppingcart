const olCartItems = document.querySelector('.cart__items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => event.target.remove();

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}\n\n`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const mapListProdutos = async () => {
  const newGetList = await fetchProducts('computador');
  const dataList = newGetList.results.map((get) => {
    const resultList = {
      sku: get.id,
      name: get.title,
      image: get.thumbnail,
    };
    return resultList;
  });
  return dataList;
};

const listProdutos = async () => {
  const addList = document.querySelector('.items');
  const getList = await mapListProdutos();
  getList.forEach((item) => {
    const addItens = createProductItemElement(item);
    addList.appendChild(addItens);
  });
};

// FUNÇÃO QUE AO CLICAR PEGA A CLASSE DO PRODUTO SELECIONADO.
const addShoppingCart = async () => {
  const clickItem = document.querySelector('.items');
  clickItem.addEventListener('click', async (event) => {
    const resultClick = event.target.parentElement;
    const itemSku = getSkuFromProductItem(resultClick);
    const response = await fetch(`https://api.mercadolibre.com/items/${itemSku}`);
    const data = await response.json();
    const resultItem = { sku: data.id, name: data.title, salePrice: data.price };
    const addCart = createCartItemElement(resultItem);
    const addclickItem = olCartItems;
    addclickItem.appendChild(addCart);
    saveCartItems(olCartItems.innerHTML);
  });
};

//  ADD AO CARRINHO DE COMPRAS LOCALSTORAGE
const newgetSavedCartItems = () => {
  const addLoadLocalstore = olCartItems;
  addLoadLocalstore.innerHTML = getSavedCartItems();
  const meuCarrinho = olCartItems;
  meuCarrinho.addEventListener('click', (event) => {
    event.target.remove();
  });
};

const removeShoppingItems = () => {
  const items = document.querySelector('.empty-cart');
  items.addEventListener('click', () => {
    olCartItems.innerHTML = '';
  });
};

window.onload = () => { 
  listProdutos();
  addShoppingCart();
  newgetSavedCartItems();
  removeShoppingItems();
};
