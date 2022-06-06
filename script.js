// createProductImageElement: Cria um elemento de imagem;
// createCustomElement: Estrutura para criar um elemento;
// createProductItemElement: Cria a lista de produtos;
// getSkuFromProductItem: Pega o id de um produto;
// cartItemClickListener: Escuta a ação de clicar em um item no carrinho;
// createCartItemElement: Cria os elementos do carrinho.
// fetchProducts: busca array com informações do produto
// fetchItem:
// getSavedCartItems:
// saveCartItems:

const itemsShowcase = document.querySelector('.items');

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

const showcase = async () => {
  const resultApi = await fetchProducts('computador');
  resultApi.results.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const products = createProductItemElement({ sku, name, image });
    itemsShowcase.appendChild(products);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = () => showcase();