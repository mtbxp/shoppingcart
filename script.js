const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {};
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
const createCartItemElement = ({
  sku,
  name,
  salePrice,
}) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const cartItem = document.querySelector('.cart__items');
  cartItem.appendChild(li);
  li.addEventListener('click', (event) => {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.remove();
  });
  return li;
};

const prepareCartList = async (itemId) => {
  const data = await fetchItem(itemId);
  const salePrice = data.price;
  const sku = data.id;
  const name = data.title;
  const result = {
    sku,
    name,
    salePrice,
  };
  createCartItemElement(result);
};
const teste = (event) => {
 const data = event.target.parentNode.firstChild.innerText;
 prepareCartList(data);
};

const createProductItemElement = ({
  sku,
  name,
  image,
}) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const item = document.querySelector('#item');
  const addItem = document.querySelectorAll('.item__add');
  item.appendChild(section);
for (let index = 0; index < addItem.length; index += 1) {
  addItem[index].addEventListener('click', teste);
}
};
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const prepareSite = async () => {
  const data = await fetchProducts('computador');
  const dataLength = data.results;
  const index = Math.round(Math.random() * dataLength.length);
  const sku = await data.results[index].id;
  const name = await data.results[index].title;
  const image = await data.results[index].thumbnail;
  const result = {
    sku,
    name,
    image,
  };
  createProductItemElement(result);
};

async function siteItens() {
   await fetchProducts('computador');
  for (let index = 0; index < 50; index += 1) {
    prepareSite();
  }
}

window.onload = () => {
  siteItens();
};
