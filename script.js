const itemsList = document.getElementsByClassName('items');
const cartItems = document.getElementsByClassName('cart__items'); 
// const totalPriceSpan = document.getElementsByClassName('total-price');
const btnClearCartItems = document.getElementsByClassName('empty-cart'); 

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

const addItemCartList = (item) => {
  let dados = getSavedCartItems();
  if (dados === null) dados = [];
  dados.push(item);
  saveCartItems(dados);
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getSkuFromProductItem = (event) => {
  const str = event.target.innerText;
  return str.slice(5, str.indexOf('|') - 1);
};

/* const getPriceFromProductItem = (event) => {
  const str = event.target.innerText;
  return str.slice(str.indexOf('$') + 1, str.lenght);
}; */

const clearClass = (classItem) => {
  let childimg = classItem[0].lastElementChild;
  while (childimg) {
    classItem[0].removeChild(childimg);
    childimg = classItem[0].lastElementChild;
  }
};

/* const getTotalPrice = (event) => {
  let text = totalPriceSpan[0].innerHTML;
  text = text.slice(text.indexOf('$') + 2, text.length);
  text -= getPriceFromProductItem(event);
  text = Math.round(text * 100) / 100;
  totalPriceSpan[0].innerHTML = `Subtotal: R$ ${text}`;
}; */

const cartItemClickListener = (event) => {
  const dados = getSavedCartItems('cartItems');
  const element = getSkuFromProductItem(event);
  dados.splice(dados.indexOf(element), 1);
  // getTotalPrice(event);
  event.target.remove();
  saveCartItems(dados);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
/* 
const updateTotalPrice = (array) => {
  const value = array.reduce((acc, curr) => acc + curr, 0);
  return Math.round(value * 100) / 100;
}; */

const updateListCartItems = () => {
  const dados = getSavedCartItems('cartItems');
  const N = cartItems[0].childElementCount;

  if (dados !== null && dados.lenght !== N) {
    clearClass(cartItems);
    // const totalPrice = [];

    dados.map(async (item) => {
      const { id: sku, title: name, price: salePrice } = await fetchItem(item);
      /* totalPrice.push(salePrice);
      totalPriceSpan[0].innerHTML = `Subtotal: R$ ${updateTotalPrice(totalPrice)}`; */
      cartItems[0].appendChild(createCartItemElement({ sku, name, salePrice }));
    });
  }
};

const addCartItemClickListener = () => {
  document.querySelectorAll('.item__add').forEach((item) => {
    item.addEventListener('click', async (e) => {
      const itemCart = e.target.parentNode.firstChild.innerText;
      const { id: sku } = await fetchItem(itemCart);
      addItemCartList(sku);
      updateListCartItems();
    });
  });
};

const clearCart = () => {
  localStorage.removeItem('cartItems');
  clearClass(cartItems);
  // totalPriceSpan[0].innerHTML = 'Subtotal: R$';
};

const showListProducts = async () => {
  const data = await fetchProducts('computador');
  data.map((item) => {
    const { id: sku, title: name, thumbnail: image } = item;
    const element = createProductItemElement({ sku, name, image });
    return itemsList[0].appendChild(element);
  });
  addCartItemClickListener();
};

btnClearCartItems[0].addEventListener('click', clearCart);
window.onload = () => { 
  showListProducts();
  updateListCartItems();
};