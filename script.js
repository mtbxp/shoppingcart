const classeItems = document.getElementsByClassName('items')[0];
const classeCartItems = document.getElementsByClassName('cart__items')[0];

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

function listaProdutos() {
  fetchProducts('computador').then((resposta) => 
  resposta.results.forEach((item) => 
  classeItems.appendChild(createProductItemElement(item))));
}
listaProdutos();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  /* coloque seu código aqui! */
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

function adicionaProdutos(produto) {
  fetchItem(produto).then((response) => 
  classeCartItems.appendChild(createCartItemElement(response)));
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const acessaProduto = event.target.parentNode.firstChild.innerText;
    adicionaProdutos(acessaProduto);
  }
});

window.onload = () => { };
