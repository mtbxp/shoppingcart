const sectionItems = document.getElementsByClassName('items')[0];
const olCartItems = document.getElementsByClassName('cart__items')[0];

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

// const ref = createCustomElement('click');

const callCreateProductItemElement = () => {
  fetchProducts('computador').then((i) => i.results
  .forEach((j) => sectionItems.append(createProductItemElement(j))));
};

callCreateProductItemElement();
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// async function cartItemClickListener(event) {
//   const el = event.parentNode;
//   const item = await fetchItem(el.firstChild.innerText).then((i) => olCartItems.appendChild(createCartItemElement(i)));
// }

// document.addEventListener('click', (event)=>{
//   if(event.target.classList.contains('cart__item'){
//     cartItemClickListener(event.target)
//   })
// })
const cartItemClickListener = (event) => {
 
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  
  return li;
};

const callCreateCartItemElement = (arg) => {
  fetchItem(arg).then((i) => olCartItems.appendChild(createCartItemElement(i)));
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('item__add')) {
    const el = event.target.parentNode.firstChild.innerText;
    await callCreateCartItemElement(el);
  }
});

cartItemClickListener();

window.onload = () => { };