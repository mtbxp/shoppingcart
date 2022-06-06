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

const createComputersList = async () => {
  const computersData = (await fetchProducts('computador')).results;
  const computersExtractedData = computersData.map(({ id, title, thumbnail }) => ({
    sku: id,
    name: title,
    image: thumbnail,
  }));
  const computersList = document.querySelector('.items');
  computersExtractedData.forEach((computer) => {
    computersList.appendChild(createProductItemElement(computer));
  });
};

const addToCart = async (event) => {
  const itemID = event.target.parentElement.firstElementChild.innerText;
  const itemData = await fetchItem(itemID);
  const itemExtractedData = {
    sku: itemData.id,
    name: itemData.title,
    salePrice: itemData.price,
  };
  const cartItemsList = document.querySelector('.cart__items');
  cartItemsList.appendChild(createCartItemElement(itemExtractedData));
};

const addListenerToComputersBtns = async () => {
  await createComputersList();
  const addToCartBtns = document.querySelectorAll('.item__add');
  addToCartBtns.forEach((btn) => btn.addEventListener('click', addToCart));
};

window.onload = () => { addListenerToComputersBtns(); };
