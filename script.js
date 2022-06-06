// Cria um elemento de imagem:
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
// .....................................................................................
// Estrutura para criar um elemento: 
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
// .....................................................................................

// Requisito 5 - Escuta a ação de clicar em um item no carrinho:
const cartItemClickListener = ('click', (event) => {
  event.target.remove();
});
// .....................................................................................(USADO)
// Requisito 4 - Cria os elementos do carrinho: 
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// .....................................................................................(MINHA)
// Requisito 4 - Função que recebe um id e usa o fetchItem para buscar as informações do produto, e após isso usa a createCartItemElement pra adicionar ao carrinho. ---- Falta pegar o ID de cada item -----
const filterCart = async (id) => {
  const ol = document.querySelector('.cart__items');
  const itemDet = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = itemDet;
  ol.appendChild(createCartItemElement({ sku, name, salePrice }));
};
// .....................................................................................
// Requisito 4 - Pega o id de um produto:
const getSkuFromProductItem = (item) => item.querySelector('.item__sku').innerText;
// .....................................................................................(USADO)
// Requisito 2 - Cria a lista de produtos: Tbm usado no quesito 4 para adicionar o evento de clique no botão!
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  // section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = (createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.appendChild(button);
  button.addEventListener('click', (event) => {
  const cada = event.target.parentNode;
  const id = getSkuFromProductItem(cada);
  filterCart(id);
  });
  return section;
};
// .....................................................................................(MINHA)
// Requisito 2 Função que recebe e saída do fetch trabalha ela e o resultado usa como parâmetro da função "createProductItemElement" pra adicionar ao carrinho, e adiciona o evento de click em cada botão.
const filterData = async () => {
  const item = document.querySelector('.items');
  const data = await fetchProducts('computador');
  data.results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    item.appendChild(createProductItemElement({ sku, name, image }));
  });
};

// .....................................................................................

window.onload = () => {
  filterData();
};
