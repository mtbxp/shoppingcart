const sectionCart = document.getElementsByClassName('cart__items')[0];
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  // const sectionCart = document.getElementsByClassName('cart__items')[0];
  savedCartItems(sectionCart.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const renderItems = async (id) => {
  const item = await fetchItem(id);
  const element = {
    sku: item.id,
    name: item.title,
    salePrice: item.price,
  };
  const y = createCartItemElement(element);
  sectionCart.appendChild(y);
  const cartStringfy = JSON.stringify(sectionCart.innerHTML);
  saveCartItems(cartStringfy);
};

const createCustomElement = (element, className, innerText, sku) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.addEventListener('click', async () => renderItems(sku));
  }
  return e;
};

const totaCost = async () => {
  let array = [];
  array = sectionCart.innerText;
  console.log(array);
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

const mapProducts = async () => {
  const products = await fetchProducts('computador');
  const allProducts = products.map((element) => {
    const obj = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    return obj;
  });
  return allProducts;
};

const renderProducts = async () => {
  const result = await mapProducts();
  result.forEach((element) => {
    const sectionItems = document.querySelector('.items');
    const x = createProductItemElement(element);
    sectionItems.appendChild(x);
  });
};

const ol = document.querySelector('.empty-cart');
function cleanList() {
  sectionCart.innerHTML = '';
}
ol.addEventListener('click', cleanList);

window.onload = () => { 
  renderProducts();
};
