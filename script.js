const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  // const sectionCart = document.querySelector('.cart__items');
  // sectionCart.removeChild(event.target);
  event.target.remove(); // perguntar qual a diferença entre fazer isso ou as duas linhas acima
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductToCart = async (event) => {
  const itemId = await fetchItem(event);
  // console.log(event);
  const sectionCart = document.querySelector('.cart__items');
  const { id, title, price } = itemId;
  const reference = {
    sku: id,
    name: title,
    salePrice: price,
  };
  const selectedItem = createCartItemElement(reference);
  sectionCart.appendChild(selectedItem);
  saveCartItems();
};

const createCustomElement = (element, className, innerText, sku) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') e.addEventListener('click', () => addProductToCart(sku));
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getList = async () => {
  const query = await fetchProducts('computador');
  query.forEach(({ id, title, thumbnail }) => {
    const reference = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    const addElement = createProductItemElement(reference);
    const item = document.getElementsByClassName('items')[0];
    item.appendChild(addElement);
  });
};

window.onload = () => {
  getList();
};
