const sectionItem = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

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

// const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
//   const section = document.createElement('section');
//   section.className = 'item';

//   section.appendChild(createCustomElement('span', 'item__sku', sku));
//   section.appendChild(createCustomElement('span', 'item__title', name));
//   section.appendChild(createProductImageElement(image));
//   section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

//   section.addEventListener('click', async (element) => { 
//   const itemID = element.target.parentNode.firstChild.innerText;
//   const item = await fetchItem(itemID);
//   cartItems.appendChild(createCartItemElement(item)); 
//   });

//   return section;
// };

// const showComputers = async () => {
//   const products = await fetchProducts('computador');
//   products.results.forEach((endpoint) => {
//   const append = createProductItemElement(endpoint);
//   sectionItem.appendChild(append);
// });
// };

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  section.addEventListener('click', async (element) => { 
  const itemID = element.target.parentNode.firstChild.innerText;
  const item = await fetchItem(itemID);
  cartItems.appendChild(createCartItemElement(item)); 
  });

  return section;
};

const showComputers = async () => {
  const products = await fetchProducts('computador');
  products.results.forEach((endpoint) => {
  const append = createProductItemElement(endpoint);
  sectionItem.appendChild(append);
});
};

const clearCart = () => {
  const limparCarrinho = document.querySelector('.empty-cart');
  limparCarrinho.addEventListener('click', () => {
    document.querySelectorAll('.cart__item').forEach((li) => li.remove());
  });
};
// function button() {
//   const section = document.querySelector('.item__add');
//   section.addEventListener('click', async (element) => {
//     const itemID = element.target.parentNode.firstChild.innerText;
//     const item = await fetchItem(itemID);
//     cartItems.appendChild(createCartItemElement(item));
//   });
// }

window.onload = () => {
  showComputers();
  clearCart();
 };
