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

const cartItemClickListener = (event) => event.target.remove('.cart__items');
   
// const createCartItem = (id) => {
//   const item = fetchItem(id);
//   const element = createCartItemElement({ sku: item.sku, name: item.name, salePrice: item.price });
//   const cartItem = document.querySelector('ol.cart__items');
//   cartItem.appendChild(element);
// }

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const insertProduct = async () => {
  const getClassItem = document.querySelector('.items');
  const arrayProducts = await fetchProducts('computador');

  arrayProducts.results.forEach((element) => {
    const item = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    const productCard = createProductItemElement(item);
    getClassItem.appendChild(productCard);
  });
};

const addtoCar = async (event) => {
  const cartItem = document.querySelector('.cart__items');
  const targetId = event.target.parentElement.firstChild.innerText;
  const item = await fetchItem(targetId);
  const descricaoItem = {
    sku: item.id,
    name: item.title,
    salePrice: item.price,
  };
  const createElement = createCartItemElement(descricaoItem);
  cartItem.appendChild(createElement);
};

const addEventOnButton = () => {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', addtoCar);
  });  
};

window.onload = async () => {
  await insertProduct();
  addEventOnButton(); 
};
