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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const fetchProductsToCreateProducts = async () => {
  const data = await fetchProducts('computador');
  data.results.forEach((curr) => {
    const sectionDad = document.querySelector('.items');
    sectionDad.appendChild(createProductItemElement(curr));
  });
};
fetchProductsToCreateProducts();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // code do
};

document.addEventListener('click', ()=> {
  if()
});
const itemClickListener = async () => {
  const item = document.querySelector('.item');
  console.log(item);
  for (let i = 0; i < item.length; i += 1) {
    item[i].addEventListener('click', () => {
      console.log('oi');
      item[i].classList.add('selected');
    });
  }
};
itemClickListener();

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  // const buttom = document.querySelectorAll('.item_add');
  // buttom.addEventListener
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  // buttom.addEventListener('click', () => {
    
  // });
  return li;
};

const addCartItemElement = async () => {
  const dataItem = await fetchItem('MLB1341706310');
  console.log(dataItem.price);
  const olCartItems = document.querySelector('.cart_items');
  // olCartItems.appendChild(createCartItemElement(dataItem.id, dataItem.title, dataItem.price));
};
addCartItemElement();

window.onload = () => { createCartItemElement(); };
