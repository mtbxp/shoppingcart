let cartItems = []; // requisito 8
const CARTCLASS = '.cart__items';

const showTotalPrice = () => {
  const showPrice = document.querySelector('.total-price');
  let totalPrice = 0;
  for (let index = 0; index < cartItems.length; index += 1) {
    totalPrice += cartItems[index].salePrice;
  }
  showPrice.innerText = totalPrice;
};

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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const removedItemId = event.target.innerText.split(' ')[1]; // requisito 8
  const indexOfRemovedItem = cartItems.findIndex((e) => e.sku === removedItemId);
  cartItems.splice(indexOfRemovedItem, 1);
  console.log(cartItems);
  saveCartItems(cartItems);
  showTotalPrice();
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  // console.log(name, 'dentro de createcartitens', cartItems);
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  cartItems.push({ sku, name, salePrice }); // requisito 8
  showTotalPrice();
  saveCartItems(cartItems);
  return li;
};

// const reloadCart = () => {
//   // cartItems = await getSavedCartItems();
//   if (cartItems.length > 0) {
//     cartItems.forEach((e) => {
//       const li = document.createElement('li');
//       li.className = 'cart__item';
//       li.innerText = `SKU: ${e.sku} | NAME: ${e.name} | PRICE: $${e.salePrice}`;
//       li.addEventListener('click', cartItemClickListener);
//       const cart = document.querySelector(CARTCLASS);
//       cart.appendChild(li);
//     });
//   }
//   showTotalPrice();
// };

const emptyCart = () => {
    const cartList = document.querySelector(CARTCLASS);
    while (cartList.firstChild) {
      cartList.removeChild(cartList.firstChild);
    }
    cartItems = [];
    showTotalPrice();
    saveCartItems(cartItems);
};

const renderProducts = async () => {
  const elementos = await fetchProducts('computador').then((data) => data.results);
  const sku = elementos.map((esku) => esku.id);
  const name = elementos.map((ename) => ename.title);
  const image = elementos.map((eimage) => eimage.thumbnail);
  const price = elementos.map((eprice) => eprice.price);
  const itemList = [];
  for (let i = 0; i < sku.length; i += 1) {
    itemList.push({ sku: sku[i], name: name[i], image: image[i], salePrice: price[i] });
  }
  const items = document.querySelector('.items');
  itemList.forEach((e) => items.appendChild(createProductItemElement(e)));
  const addButton = document.querySelectorAll('.item__add');
  addButton.forEach((e, n) => e.addEventListener('click', async () => {
    // console.log(`clicou no elemento ${n}`);
    // const selectedProduct = await fetchItem(itemList[n].sku);
    const cart = document.querySelector(CARTCLASS);
    cart.appendChild(createCartItemElement(itemList[n]));
  }));
};

const btnempty = () => {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', () => emptyCart());
};

const loadStorage = async () => {
  const storageData = await getSavedCartItems();
  console.log(storageData);
  storageData.forEach((e) => {
    const cart = document.querySelector(CARTCLASS);
    cart.appendChild(createCartItemElement(e));
  });
};

window.onload = () => {
  renderProducts();
  btnempty();
  loadStorage();
};
