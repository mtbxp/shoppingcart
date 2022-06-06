const itemsList = document.getElementsByClassName('items');
const cartItems = document.getElementsByClassName('cart__items');

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
/* 
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
 */
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

const addCartItemClickListener = () => {
  document.querySelectorAll('.item__add').forEach((item) => {
    item.addEventListener('click', async (e) => {
      const itemCart = e.target.parentNode.firstChild.innerText;
      const { id: sku, 
              title: name, 
              price: salePrice } = await fetchItem(itemCart);
      console.log(sku, name, salePrice);
      cartItems[0].appendChild(createCartItemElement({ sku, name, salePrice }));
    });
  });
};

const showList = async () => {
  const data = await fetchProducts('computador');
  data.map((item) => {
    const { id: sku, title: name, thumbnail: image } = item;
    const element = createProductItemElement({ sku, name, image });
    return itemsList[0].appendChild(element);
  });
  addCartItemClickListener();
};

window.onload = () => { 
  showList();
};
