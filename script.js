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

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  // alteraçao no button
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// functions adicionais

const SearchDetailsProduct = async (id) => {
  const card = await fetchItem(id); 
  return card;
};

const SearchProducts = async () => {
  const produtos = await fetchProducts('computador');
  const { results } = produtos;
  return results;
};

const addCardCar = async (id) => {
  const product = JSON.parse(localStorage.getItem(id));
  const productCard = createCartItemElement(product);
  const carList = document.querySelector('.cart__items');
  carList.appendChild(productCard);
  // console.log('car', productCard);
};

const eventButton = (child) => {
  child.addEventListener('click', async ({ path }) => {
    const id = [path[1].querySelector('.item__sku').innerText];
    const details = await SearchDetailsProduct(id);
    localStorage.setItem(id, JSON.stringify(details));
    
    addCardCar(id);
    // console.log(id, 'ok', details);
  });
};

const createCardProduct = async () => {
  const produtos = await SearchProducts();
  produtos.map((produt) => {
    const productList = document.querySelector('.items');
    const child = createProductItemElement(produt);
    eventButton(child);
    return productList.appendChild(child);
  });
};
// preciso dar aṕpendChild em uma section com class = items

window.onload = () => {
  // localStorage.setItem('items', JSON.stringify([]));
  // buttonEvent();
  // createCard();
  createCardProduct();
  // SearchDetailsProduct('MLB1615760527');
};
