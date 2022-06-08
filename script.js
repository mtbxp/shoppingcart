const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = () => {
  // coloque seu código aqui;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemToCart = async (event) => {
  const OlInCart = document.getElementsByClassName('cart__items')[0];

  const sectionProduct = event.target.parentElement;
  const itemID = sectionProduct.getElementsByTagName('span')[0].innerText;
  const { id: sku, title: name, price: salePrice } = await fetchItem(itemID);
  const itemToAdd = createCartItemElement({ sku, name, salePrice });
  OlInCart.appendChild(itemToAdd);
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.addEventListener('click', addItemToCart);
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

window.onload = async () => { 
  const getItemSection = document.querySelector('.items');
  const { results } = await fetchProducts('computador');
  results.forEach((item) => {
    const getInfoPruduct = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const createItem = createProductItemElement(getInfoPruduct);
    getItemSection.appendChild(createItem);
  });
 };
