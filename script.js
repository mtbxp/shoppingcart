const sectionItems = document.querySelector('.items');

const ol = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  
};

const createCartItemElement = ({ id: sku, title: name, thumbnail, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.appendChild(createProductImageElement(thumbnail));
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

function addItemCart(event) {
  if (event.target.classList.contains('item__add')) {
  const getSku = getSkuFromProductItem(event.target.parentElement);
  fetchItem(getSku).then((objeto) => {
   ol.appendChild(createCartItemElement(objeto));
  });
  }
}

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.addEventListener('click', addItemCart);
  return e;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

fetchProducts('computador')// retorna a API tratada com o JSON() vulgo 'response'.
.then((data) => { // será meu response - o que vem depois da arrow F é uma função.
  data.results.forEach((product) => { // forEach retorna o que eu quiser.
    sectionItems.appendChild(createProductItemElement(product));
  });
});

window.onload = () => { };
