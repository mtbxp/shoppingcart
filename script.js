// Ajuda da revisão do Gabs 06/06 e da aula da casa de câmbio 07/07

const cart = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  // Com o clique no item do carrinho, remover a classe que o faz pertencer ao carrinho.
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const itemCart = async (itemId) => {
  const data = await fetchItem(itemId);
  const { id, title, price } = data;
  const itemObj = { sku: id, name: title, salePrice: price };
  cart.appendChild(createCartItemElement(itemObj));
};

const addToCart = (event) => {
  const parent = event.target.parentElement;
  itemCart(getSkuFromProductItem(parent));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', addToCart);

  return section;
};

const renderItens = async () => {
  const itemList = document.querySelector('.items');
  
  const products = await fetchProducts('computador');
  
  products.results.forEach((product) => {
    const itemLoad = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    };
    const productCard = createProductItemElement(itemLoad);
    itemList.appendChild(productCard);
  });
};

window.onload = () => {
 renderItens();
 };
