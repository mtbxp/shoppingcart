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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = () => {
  fetchProducts('computador').then((data) => {
    const items = document.querySelector('.items');
    const produtos = data.results;
    produtos.forEach((element) => {
      const item = createProductItemElement(element);
      items.appendChild(item);
    });
  });
};

const addCarrinho = (data) => {
  const cart = document.querySelector('.cart__items');
  const prodCarrinho = createCartItemElement(data);
  prodCarrinho.addEventListener('click', (event) => {
    event.target.remove();
  });
  cart.appendChild(prodCarrinho);
};

const removeProd = () => {
  const items = document.querySelector('.items');
  items.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const id = getSkuFromProductItem(event.target.parentNode);
      fetchItem(id).then((data) => addCarrinho(data));
    }
  });
};

window.onload = () => { createProductList(); removeProd(); };
