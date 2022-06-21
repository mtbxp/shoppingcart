const cartItem = document.querySelector('.cart__items');
const emptyButton = document.querySelector('.empty-cart');

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

emptyButton.addEventListener('click', () => {
  cartItem.innerHTML = '';
});

const cartItemClickListener = (event) => {
event.target.remove();
const replace = document.querySelector('.cart__items').innerHTML;
saveCartItems(replace);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const products = async () => {
  const { results } = await fetchProducts('computador');
    const getProducts = results.map(({ id, title, thumbnail }) => {
      const obj = {
      sku: id,
      name: title,
      image: thumbnail,
      };
      return obj;
    });
    return getProducts;
};

createHtmlItens = async () => {
  const result = await products();
  result.forEach((element) => {
    const findItemsSection = document.querySelector('.items');
    const creatorCall = createProductItemElement(element);
    findItemsSection.appendChild(creatorCall);
  });
};

const itemsNode = document.querySelector('.items');
itemsNode.addEventListener('click', async (event) => {
  if (event.target.className === 'item__add') {
    const sku = event.target.parentElement.firstChild.innerText;
    const objId = await fetchItem(sku);
    const objChanged = {
      sku: objId.id,
      name: objId.title,
      salePrice: objId.price,
    };
  cartItem.appendChild(createCartItemElement(objChanged));
  }
  saveCartItems(cartItem.innerHTML);
});

window.onload = async () => {
  createHtmlItens();
  getSavedCartItems();
  const allLi = document.querySelectorAll('.cart__item');
  allLi.forEach((item) => item.addEventListener('click', cartItemClickListener));
};