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

const showProducts = async () => {
  const productSection = document.querySelector('.items');
  const product = await fetchProducts('computador');
  product.forEach((element) => {
    const productInfor = {
     sku: element.id,
     name: element.title,
     image: element.thumbnail,
    };
    productSection.appendChild(createProductItemElement(productInfor));
  });
};

const productsCar = async (item) => { 
  const itemsSection = document.querySelector('.cart_items');
  const itemsCar = await fetchItem(item);
  const itemsInfor = {
    sku: itemsCar.id,
    name: itemsCar.title,
    salePrice: itemsCar.price,
  };
  itemsSection.innerHTML = createCartItemElement(itemsInfor);
};

window.onload = () => { 
  showProducts();
  productsCar();
};