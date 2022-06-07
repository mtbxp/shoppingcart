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

const cartItemClickListener = async (event) => {
  const elemento = event.target;
  elemento.remove();
  localStorage.removeItem('favoritos');
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  saveCartItems(li);
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const prepareSite = async () => {
  const data = await fetchProducts('computador');
  const obj = [];
  const result = [];
  for (index = 0; index < 50; index += 1) {
    const element = data.results[index];
    obj.push({
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    });
    }
  obj.forEach((element) => result.push(createProductItemElement(element)));
  return result;
 };

 const showItens = async () => {
   const section = document.getElementsByClassName('items')[0];
   const childs = await prepareSite();
   childs.forEach((element) => section.appendChild(element));
};

const getElement = async (event) => {
  const section = event.target.parentNode;
  const id = section.firstElementChild.innerText;
  const element = await fetchItem(id);
  const obj = { sku: element.id, name: element.title, salePrice: element.price };
  const cart = document.getElementsByClassName('cart__items')[0];
  cart.appendChild(createCartItemElement(obj));
};

 const addShoppingCart = async () => {
    await showItens();
    const button = document.getElementsByClassName('item__add');
    for (index = 0; index < button.length; index += 1) {
      button[index].addEventListener('click', getElement);
    }
};

addShoppingCart();
window.onload = () => { getSavedCartItems(); };