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

const cartItemClickListener = (event) => {
  const elementTouch = event.target;
  elementTouch.parentElement.removeChild(elementTouch);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const moveToCart = async (event) => {
  const fatherElement = event.target.parentElement;
  const itemSku = fatherElement.getElementsByClassName('item__sku')[0].innerText;
  const itemInfos = await fetchItem(itemSku);
  const cartItems = document.getElementsByClassName('cart__items')[0];
  const obj = {
    sku: await itemInfos.id,
    name: await itemInfos.title,
    salePrice: await itemInfos.price,
  };
  cartItems.appendChild(createCartItemElement(obj));
};

const init = async () => {
  const obj = await fetchProducts('computador');
  const secItems = document.getElementsByClassName('items')[0];
  const buttons = document.getElementsByClassName('item__add');
  Object.values(obj).forEach((element) => {
    const newObj = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    secItems.appendChild(createProductItemElement(newObj));
  });
  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', moveToCart);
  }
};

window.onload = init;
