const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartPriceManagement = () => {
  const priceDiv = document.getElementById('value');
  let totalPrice = 0;
  const liInOlCart = document.querySelectorAll('.cart__item');
  liInOlCart.forEach((item) => {
    const numberOfInner = Number(item.innerText.split(' ').pop().slice(1));
    totalPrice += numberOfInner;
  });
  // const formatNumber = totalPrice;
  priceDiv.innerText = totalPrice;
   /*  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // formatação encontrada em https://www.alura.com.br; */
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui;
  event.target.remove();
  cartPriceManagement();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = sku;
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
  saveCartItems(OlInCart.innerHTML);
  cartPriceManagement();
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

// para realizar a função abaixo foi consultado o site stackoverflow
const emptyCart = () => {
   const cartItems = document.querySelectorAll('.cart__item');
   cartItems.forEach((item) => item.remove());
   cartPriceManagement();
};

const buttonToEmptyCart = document.querySelector('.empty-cart');
buttonToEmptyCart.addEventListener('click', emptyCart);

window.onload = async () => {
  const getItemsSection = document.querySelector('.items');
  const createLoading = document.createElement('span');
  createLoading.className = 'loading';
  createLoading.innerText = 'carregando...';
  getItemsSection.appendChild(createLoading);
  const { results } = await fetchProducts('computador');
  results.forEach((item) => {
    const getInfoPruduct = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const createItem = createProductItemElement(getInfoPruduct);
    getItemsSection.appendChild(createItem);
  });
  getItemsSection.firstChild.remove();
};
