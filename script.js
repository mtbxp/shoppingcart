let addCartItemClick = '';
const classItems = '.cart__items';

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText, id) => {
  const e = document.createElement(element);
  e.className = className;
  e.id = id;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.id = sku;
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const createButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku);
  section.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    addCartItemClick = event.target.id;
    itemAdd();
  });
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const removeItemClick = event.path[0];
  // const itemRemoved = document.getElementById(removeItemClick);
  // console.log(event);
  removeItemClick.remove();
  // saveCartItems('cartItems', ); // remover o item clicado do localStorage
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.id = `${sku}-cart`;
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const loadCart = () => {
  // const getInfoLocalStorage = 
  const cartItem = document.querySelector(classItems).innerHTML;
  saveCartItems('cartItems', cartItem);
};

const getCart = () => {
  getSavedCartItems();
  document.querySelector(classItems).innerHTML = getSavedCartItems();
};

listProduct = async () => {
  const products = await fetchProducts('computador');
  const sectionItems = document.querySelector('.items');
  products.forEach((element) => {
    const objProduct = { sku: element.id, name: element.title, image: element.thumbnail };
    const resultProduct = createProductItemElement(objProduct);
    sectionItems.appendChild(resultProduct);
  });
};

itemAdd = async () => { 
  const detailsItem = await fetchItem(addCartItemClick);
  const sectionCart = document.querySelector(classItems);
  detailsItem.forEach((element) => {
    const objItemAdd = { sku: element.id, name: element.title, salePrice: element.price };
    const listItemCart = createCartItemElement(objItemAdd);
    sectionCart.appendChild(listItemCart);
  });

  loadCart();
};

const buttonEmptyCart = document.getElementById('button-empty');
buttonEmptyCart.addEventListener('click', () => {
  const listCart = document.getElementById('list-cart');
  listCart.innerHTML = '';
  saveCartItems('cartItems', '');
});

const listCart = document.getElementById('list-cart');
listCart.addEventListener('click', cartItemClickListener);

window.onload = async () => {
  listProduct();
  getCart();
};
