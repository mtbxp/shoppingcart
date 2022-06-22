const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
const cartItem = document.getElementsByClassName('cart__items')[0];
const butRemov = document.getElementsByClassName('empty-cart')[0];


const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const searchCart = async (ItemID) => {
  const fetchI = await fetchItem(ItemID);

  const element = {
    sku: fetchI.id,
    name: fetchI.title,
    salePrice: fetchI.price,
  };
  const creatI = createCartItemElement(element);
  cartItem.appendChild(creatI);
};

const createCustomElement = (element, className, innerText, sku) => {
  const result = document.createElement(element);
  result.className = className;
  result.innerText = innerText;
  if (element === 'button') {
    result.addEventListener('click', () => searchCart(sku));
  }
  return result;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku));
  return section;
};

const searchProduct = async () => {
  const fetchP = await fetchProducts('computador');
  const produtos = fetchP.map((element) => {
    const itemOb = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    return itemOb;
  });
  return produtos;
};

const sendProduct = async () => {
  const itens = await searchProduct();
  itens.forEach((element) => {
    const item = document.getElementsByClassName('items')[0];
    const creatP = createProductItemElement(element);
    item.appendChild(creatP);
  });
};

const removeItemFromCart = () => {
  butRemov.addEventListener('click', () => {
    cartItem.innerHTML = '';
  });
};

function startLoading() {
  const eleDom = document.createElement('div');
  eleDom.className = 'loading';
  eleDom.textContent = 'carregando...';
}

function clearLoading() {
  const eleDom = document.getElementsByClassName('.loading')[0];
  eleDom.remove();
}

window.onload = () => {
  removeItemFromCart();
  startLoading();
  setTimeout(() => {
    sendProduct();
    clearLoading();
  }, 1000);
 };
