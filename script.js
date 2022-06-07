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

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// Codigo remover Itens
const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Adicionar lista de produtos no site
const addProductsToSite = async () => {
  const items = document.querySelector('.items');
  const products = await fetchProducts('computador');
  const listProduct = products.results;
  listProduct.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const item = createProductItemElement({ sku, name, image });
    items.appendChild(item);
});
};

// Adicionar o Produto ao Carringo de Compras
const addProductsToCarrinho = async (event) => {
  const carts = document.querySelector('.cart__items');
  const itemId = getSkuFromProductItem(event.target.parentNode);
  const productId = await fetchItem(itemId);
  const { id: sku, title: name, price: salePrice } = productId;
  const productIdOn = createCartItemElement({ sku, name, salePrice });
  carts.append(productIdOn);
};

window.onload = async () => {
  await addProductsToSite();

  // Adicionando o Botao na captura dos items
  const addButtonsItem = document.querySelectorAll('.item__add');
  addButtonsItem.forEach((button) => button.addEventListener('click', addProductsToCarrinho));
};
