const cartList = document.querySelector('.cart__items');
const btnClear = document.querySelector('.empty-cart');

btnClear.addEventListener('click', () => {
  cartList.innerHTML = '';
  saveCartItems(cartList.innerHTML);
});

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

const loadingScreenOn = () => {
  const cart = document.querySelector('.cart');
  const loadingText = document.createElement('span');
  loadingText.className = 'loading';
  loadingText.innerText = 'carregando...';

  cart.appendChild(loadingText);
};

const loadingScreenOff = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartList.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createCardItem = async (click) => {
  const id = getSkuFromProductItem(click.target.parentNode);
  const resultItens = await fetchItem(id);
  const cardItens = {
    sku: resultItens.id,
    name: resultItens.title,
    salePrice: resultItens.price,
  };
  const cartItens = createCartItemElement(cardItens);
  cartList.appendChild(cartItens);
  saveCartItems(cartList.innerHTML);
};

const productList = async (product) => {
  loadingScreenOn();
  const searchProduct = await fetchProducts(product);
  const sectionItens = document.querySelector('.items');
  searchProduct.results.forEach((item) => {
    const itemObject = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const productItem = createProductItemElement(itemObject);
    sectionItens.appendChild(productItem);
  });
  const addCardItem = document.querySelectorAll('.item__add');
  addCardItem.forEach((item) => {
    item.addEventListener('click', createCardItem);
  });
  loadingScreenOff();
};

const removeItemSaved = () => {
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

window.onload = () => {
  productList('computador');
  cartList.innerHTML = getSavedCartItems();
  removeItemSaved();
};