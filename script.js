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

const createProductItemElement = (sku, name, image) => {
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
   event.target.innerHTML = '';
};

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.appendChild(createProductImageElement(image));
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const cart = async (event) => {
  const carrinho = document.querySelector('.cart__items');
  const selected = event.target.parentElement.firstElementChild.innerText;
  // const img = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.src;
  const itemJSON = await fetchItem(selected);
  const { id, title, price } = itemJSON;
  const itemCarrinho = createCartItemElement(id, title, price);
  carrinho.appendChild(itemCarrinho);
};

const renderProducts = async () => {
  const items = document.getElementsByClassName('items')[0];
  const products = await fetchProducts('computador');
  const produto = products.results;
  produto.forEach((element) => {
    const { id, title, thumbnail } = element;
    const cardProduto = createProductItemElement(id, title, thumbnail);
    items.appendChild(cardProduto);
    });
  items.addEventListener('click', cart);
};

window.onload = () => {
  renderProducts();
};
