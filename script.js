const itemsSection = document.querySelector('.cart__items');
const sectionPrice = document.querySelector('.cart');
const buttonCleam = document.querySelector('.empty-cart');

const clearCar = () => {
  const liS = document.querySelectorAll('.cart__item');
  liS.forEach((item) => {
    item.remove();
  });
  saveCartItems(itemsSection.innerHTML);
};

buttonCleam.addEventListener('click', clearCar);

const div = () => {
  const divPrice = document.createElement('div');
  divPrice.className = 'total-price';
  sectionPrice.appendChild(divPrice);
  divPrice.innerText = 'R$ 0';
};
div();

let price = 0;

const sumPrice = (number) => {
  const priceTotal = document.querySelector('.total-price');

  price += number;
  priceTotal.innerText = `R$${price}`;
};

const subPrice = (number) => {
  const priceTotal = document.querySelector('.total-price');

  price -= number;
  priceTotal.innerText = `R$${price}`;
};

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
  event.target.remove();
  saveCartItems(itemsSection.innerHTML);

  const priceItem = parseFloat(event.target.innerHTML.split('$')[1]);
  subPrice(priceItem);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const productsCar = async (item) => { 
  const itemsCar = await fetchItem(item);
  const itemsInfor = {
    sku: itemsCar.id,
    name: itemsCar.title,
    salePrice: itemsCar.price,
  };
  itemsSection.appendChild(createCartItemElement(itemsInfor));
  saveCartItems(itemsSection.innerHTML);
  sumPrice(itemsInfor.salePrice);
};

const getStorage = () => {
  itemsSection.innerHTML = getSavedCartItems();
  itemsSection.childNodes.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};
getStorage();

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
  const clickProduct = document.querySelectorAll('.item__add');
  clickProduct.forEach((button) => {
    button.addEventListener('click', (event) => {
      productsCar(event.target.parentNode.firstChild.innerHTML);
    });
  });
};

window.onload = () => { 
  showProducts();
};
