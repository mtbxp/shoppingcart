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

const getSkuFromProductItem = (id) => {
  const cartList = document.querySelector('.cart__items');
  fetchItem(id).then((product) => {
    cartList.appendChild(createCartItemElement(product)); 
  });
  // item.querySelector('span.item__sku').innerText;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const itemButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  itemButton.addEventListener('click', () => getSkuFromProductItem(sku));
  section.appendChild(itemButton);

  return section;
};

const InsertProducts = async () => {
  const arrayProducts = await fetchProducts('computador');
  const getProducts = document.querySelector('.items');
  arrayProducts.results.forEach((product) => {
    getProducts.appendChild(createProductItemElement(product));
  });
};

window.onload = () => {
  InsertProducts();
};
