const sectionItems = document.getElementsByClassName('items')[0];
const btnLimpar = document.getElementsByClassName('empty-cart')[0];
const sectionCart = document.getElementsByClassName('cart__items')[0];

let buttonsAddCart = '';

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

const listagemWithoutPrice = async (index) => {
  const data = await fetchProducts('computador');

  const sku = data.results[index].id;
  const name = data.results[index].title;
  const image = data.results[index].thumbnail;

  return { sku, name, image };
};

const listagemWithPrice = async (productId) => {
  const data = await fetchItem(productId);

  const sku = data.id;
  const name = data.title;
  const salePrice = data.price;

  return { sku, name, salePrice };
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

// const cartItemClickListener = (event) => {
//   // coloque seu código aqui
// };

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const showList = () => {
  for (let index = 0; index < 50; index += 1) {
    listagemWithoutPrice(index)
    .then((response) => sectionItems.appendChild(createProductItemElement(response)));
  }
};

window.onload = () => {
  showList();
};

const removeCarrinho = () => {
  sectionCart.innerHTML = '';
};

setTimeout(() => {
  const items = document.querySelectorAll('.item');
  buttonsAddCart = document.querySelectorAll('.item__add');
  btnLimpar.addEventListener('click', removeCarrinho);

  for (let index = 0; index < buttonsAddCart.length; index += 1) {
    buttonsAddCart[index].addEventListener('click', () => {
      const id = getSkuFromProductItem(items[index]);
      listagemWithPrice(id)
      .then((resposta) => sectionCart.appendChild(createCartItemElement(resposta)));
  });
  }
}, 1000);
