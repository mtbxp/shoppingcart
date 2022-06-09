const sectionPai = document.querySelector('.items');
const cartItemsPai = document.querySelector('.cart__items');

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
// funcao usada no requisito 5
const cartItemClickListener = (event) => event.target.remove();
 
// função utilizada no requisito 4
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// função utilizada para o requisito 2
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
 
  return section;
};
// função utilizada no requisito 4
const adicionaItemCarrinho = async (event) => {
  const botao = event.target;
  const paiDoBotao = botao.parentNode;
  const primeiroFilho = paiDoBotao.firstChild;
  const itemId = primeiroFilho.innerText;
  const obj = await fetchItem(itemId);
  // console.log(obj);
  const { id: sku, title: name, price: salePrice } = obj;
  cartItemsPai.appendChild(createCartItemElement({ sku, name, salePrice }));
};

// função criada para listar os produtos e inserir no HTML do requisito 2
const listaProdutos = async () => {
  const { results } = await fetchProducts('computador');
  const arrayTratado = results
    .map((obj) => ({ sku: obj.id, name: obj.title, image: obj.thumbnail }));
  arrayTratado.forEach((obj) => {
    createProductItemElement(obj);
    sectionPai.append(createProductItemElement(obj));
  });
  const getBtn = document.querySelectorAll('.item__add');
  getBtn.forEach((btn) => {
    btn.addEventListener('click', adicionaItemCarrinho);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => {
  listaProdutos();
 };
