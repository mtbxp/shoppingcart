let priceOfCart = 0;
const sumTotal = (number) => {
  const getPriceArea = document.querySelector('.total-price');
  priceOfCart += number;
  const nowValue = priceOfCart;
  getPriceArea.innerText = `${nowValue}`;
};

const formatStringPrice = (data) => {
  let nowPrice = '';
  for (let index = data.length - 20; index <= data.length - 1; index += 1) {
    const verify = parseInt(data[index], 10);
    if (verify) {
      nowPrice += data[index];
    }
    if (data[index] === '.') {
      nowPrice += data[index];
    }
  }
  sumTotal(parseFloat(nowPrice));
};

const sumAllPrices = () => {
  const getAllCartItems = document.querySelectorAll('.cart__item');
  const totalValue = 0;
  getAllCartItems.forEach((product) => {
    formatStringPrice(product.innerText);
  });
  return totalValue;
};

const addLoading = () => {
  const itemContainer = document.querySelector('.items');
  itemContainer.innerHTML = '<div class="loading">carregando...</div>';
};
addLoading();

const removeLoading = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getPaiCart = document.querySelector('.cart__items');

const saveItem = async (produto) => {
  saveCartItems(produto.outerHTML);
};

const cartItemClickListener = (event) => {
  const elemento = event.target;
  elemento.parentNode.removeChild(elemento);
  saveItem(getPaiCart);
  priceOfCart = 0;
  sumAllPrices();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const componentePai = getPaiCart;
  componentePai.appendChild(li);
  priceOfCart = 0;
  sumAllPrices();
  return li;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getProduct = (id) => fetchItem(id).then((produto) => {
  const baseObj = {
    sku: produto.id,
    name: produto.title,
    salePrice: produto.price,
  };
  const getOl = document.querySelector('.cart__items');
  createCartItemElement(baseObj);
  saveItem(getOl);
});

const selectItemToCart = (event) => {
  const father = event.target.parentNode;
  const childrenValue = father.children[0].innerText;
  getProduct(childrenValue);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.children[3].addEventListener('click', selectItemToCart);
  const componentPai = document.querySelector('.items');
  componentPai.appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

fetchProducts('computador').then((item) => {
  item.forEach((produto) => {
    const objBase = {
      sku: produto.id,
      name: produto.title,
      image: produto.thumbnail,
    };
    createProductItemElement(objBase);
  });
  removeLoading();
});

const clearCart = () => {
  getPaiCart.innerHTML = '';
  saveItem(getPaiCart);
};

// 5 a 17

window.onload = () => {
  const btnClear = document.querySelector('.empty-cart');
  btnClear.addEventListener('click', clearCart);
  const items = getSavedCartItems();
  const newHtml = new DOMParser().parseFromString(items, 'text/html');
  const allList = newHtml.querySelectorAll('.cart__item');
  allList.forEach((produto) => {
    produto.addEventListener('click', cartItemClickListener);
    getPaiCart.appendChild(produto);
  });
  sumAllPrices();
};
