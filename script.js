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
// .....................................................................................(USADO)
// Requisito 2 - Cria a lista de produtos:
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
};
// .....................................................................................
// Requisito 3 - Pega o id de um produto:
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
// .....................................................................................
// Requisito 3 - Escuta a ação de clicar em um item no carrinho:
const cartItemClickListener = () => {
  const button = document.querySelector('.item__add');
  button.addEventListener('click', () => {
    console.log('cliquei');
  });
};
// .....................................................................................(USADO)
// Requisito 3 - Cria os elementos do carrinho: 
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// .....................................................................................(MINHA)
// Requisito 2 Função que recebe e saída do fetch trabalha ela e o resultado usao como parâmetro da função "createProductItemElement".
const filterData = async () => {
const item = document.querySelector('.items');
const data = await fetchProducts('computador');
data.results.forEach(({ id: sku, title: name, thumbnail: image }) => {
  item.appendChild(createProductItemElement({ sku, name, image }));
});
}; 
// .....................................................................................(MINHA)
// Requisito 3 - Função que recebe um id e usa o fetchItem para buscar as informações do produto, e após isso usa a createCartItemElement pra adicionar ao carrinho. ---- Falta pegar o ID de cada item -----
const filterCart = async (id) => {
  const ol = document.querySelector('.cart__items');
  const itemDet = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = itemDet;
  ol.appendChild(createCartItemElement({ sku, name, salePrice }));
}; filterCart('MLB1615760527');

window.onload = () => { 
  filterData();
};
