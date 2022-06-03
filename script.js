// Cria um elemento de imagem:
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
// .........................................................................................
// Estrutura para criar um elemento:
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
// .........................................................................................
// Cria a lista de produtos:
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};
// .........................................................................................
// Pega o id de um produto:
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
// .........................................................................................
// Escuta a ação de clicar em um item no carrinho:
const cartItemClickListener = (event) => {
  // coloque seu código aqui
};
// .........................................................................................
// Cria os elementos do carrinho:
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// .........................................................................................
// Minha função do Requisito 1 que recebe e saída do fetch trabalha ela e o resultado usao como parâmetro da função "createProductItemElement".
const filterData = async () => {
const item = document.querySelector('.items');
const data = await fetchProducts('computador');
data.results.forEach(({ id: sku, title: name, thumbnail: image }) => {
  item.appendChild(createProductItemElement({ sku, name, image }));
});
}; 

window.onload = () => { 
  filterData();
};
