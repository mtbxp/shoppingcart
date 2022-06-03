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

const populatePage = async () => {
  const itemsSection = document.getElementsByClassName('items')[0];
  const { results } = await fetchProducts('computador');
  console.log(results);
  results.forEach((result) => {
    const { id: sku, title: name, thumbnail: image } = result;
    const productInfo = {
      sku,
      name,
      image,
    };
    const newItem = createProductItemElement(productInfo);
    itemsSection.appendChild(newItem);
  });
};

const addToCart = async (event) => {
  const olCartItems = document.getElementsByClassName('cart__items')[0];
  const productCard = event.target.parentElement;
  const productId = productCard.getElementsByClassName('item__sku')[0].innerText;
  const { id: sku, title: name, price: salePrice } = await fetchItem(productId);
  const newCartItem = createCartItemElement({ sku, name, salePrice });
  olCartItems.appendChild(newCartItem);
};

window.onload = async () => {
  await populatePage();
  const addToCartButtons = document.querySelectorAll('.item__add');
  console.log(addToCartButtons);
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
 };
