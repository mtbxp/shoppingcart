const list = document.querySelector('.cart__items');

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
    document.getElementsByClassName('items')[0].appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
event.target.closest('li').remove();
// a função closest é opcional, sem ela a função cartItemClickListener funciona normalmente.
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemCart = async (idElement) => {
  const fetchNewItem = await fetchItem(idElement);
  const { id, title, price } = fetchNewItem;
  const returnObject = { sku: id, name: title, salePrice: price };
  const objReturn = createCartItemElement(returnObject);
  document.getElementsByClassName('cart__items')[0].appendChild(objReturn);
  saveCartItems(list.innerHTML);
};

const createButton = () => { 
  const getButton = document.querySelectorAll('.item__add');
getButton.forEach((element) => element.addEventListener('click', (event) => {
    const idElement = event.target.parentNode.firstChild.innerText;
    addItemCart(idElement);
  }));
};

const newfunction = async () => {
  const newItens = await fetchProducts('computador');
newItens.forEach((element) => {
  const obj = {
    sku: element.id,
    name: element.title,
    image: element.thumbnail,
  };
  return createProductItemElement(obj);
});
createButton();
}; newfunction();

const returnLocalStorage = () => {
  list.innerHTML = getSavedCartItems();
  const cartList = document.querySelectorAll('.cart__item');
  cartList.forEach((element) => {
element.addEventListener('click', cartItemClickListener);
  });
};

window.onload = () => { returnLocalStorage(); };