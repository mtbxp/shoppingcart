const sectionItem = document.querySelector('.items');
const sectionCart = document.querySelector('.cart__items');

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
  return (section);
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

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

const fetchItemId = async (id) => {
  const item = await fetchItem(id);
  newObj = { sku: item.id, name: item.title, salePrice: item.price };
  sectionCart.appendChild(createCartItemElement(newObj));
  saveCartItems(sectionCart.innerHTML);
};

const showItens = async () => {
  const { results } = await fetchProducts('computador');
  results.map((element) => ({ sku: element.id, name: element.title, image: element.thumbnail }))
    .forEach((element) => sectionItem.appendChild(createProductItemElement(element)));
  const result = document.querySelectorAll('.item');
  result.forEach((element) => {
    element.lastChild.addEventListener('click', (event) => {
      const id = event.target.parentNode.firstChild.innerText;
      fetchItemId(id);
    });
  });
};

const recoveryCart = () => {
  sectionCart.innerHTML = getSavedCartItems();
  sectionCart.childNodes
    .forEach((element) => element.addEventListener('click', cartItemClickListener));
};

const clearCartItems = () => {
  const emptyBtn = document.querySelector('.empty-cart');
  emptyBtn.addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart__item');
    cartItems.forEach((element) => element.remove());
  });
};

window.onload = () => {
  showItens();
  recoveryCart();
  clearCartItems();
};
