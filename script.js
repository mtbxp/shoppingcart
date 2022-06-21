let subtotalValue = 0;
const cartItemsClass = '.cart__items';
const totalPriceClass = '.total-price';

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

// const cartItemClickListener = () => {
//   // Add codigo
//   console.log(document.querySelectorAll('.cart__item'));
// };

function numberRounder(number) {
  const intPart = Math.floor(number);
  const decimals = number - intPart;
  const decimalsTwoPlaces = Math.round((decimals * 100));
  const roundedNumber = intPart + 0.01 * decimalsTwoPlaces;
  return { intPart, decimalsTwoPlaces, roundedNumber };
}

// Infelizmente, o resultado esperado pelo teste é diferente do que é indicado no read.me. Dessa forma, a função abaixo não tem utilidade.
// function showMoneyValueInPortuguese(value) {
//   const valueObject = numberRounder(value);
//   const displayReais = valueObject.intPart;
//   const { decimalsTwoPlaces } = valueObject;
//   let displayCentavos;
//   if (decimalsTwoPlaces === 0) {
//     displayCentavos = '00';
//   } else if (decimalsTwoPlaces <= 9) {
//     displayCentavos = `0${decimalsTwoPlaces}`;
//   } else {
//     displayCentavos = `${decimalsTwoPlaces}`;
//   }
//   const displaySubtotal = `Subtotal: R$ ${displayReais},${displayCentavos}`;
//   return displaySubtotal;
// }

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', () => {
    const parentElement = document.querySelector(cartItemsClass);
    parentElement.removeChild(li);
    const subtotalElement = document.querySelector(totalPriceClass);
    subtotalValue -= numberRounder(salePrice).roundedNumber;
    subtotalValue = numberRounder(subtotalValue).roundedNumber;
    subtotalElement.innerText = subtotalValue;
  });
  return li;
};

async function insertCartItemWithId(id) {
  const productInfo = await fetchItem(id);
  const sku = productInfo.id;
  const name = productInfo.title;
  const salePrice = productInfo.price;
  const li = createCartItemElement({ sku, name, salePrice });
  const parentElement = document.querySelector(cartItemsClass);
  parentElement.appendChild(li);
  const subtotalElement = document.querySelector(totalPriceClass);
  subtotalValue += numberRounder(salePrice).roundedNumber;
  subtotalElement.innerText = subtotalValue;
}

async function productsHandle() {
  const productsInfo = await fetchProducts('computador');
  productsInfo.forEach((item) => {
    // renderProductElement
    const sku = item.id; const name = item.title; const image = item.thumbnail;
    const productElement = createProductItemElement({ sku, name, image });
    const parentElement = document.querySelector('.items');
    parentElement.appendChild(productElement);
    // insert product on chart with click
    productElement.lastElementChild.addEventListener('click', () => {
      const id = productElement.firstElementChild.innerText;
      insertCartItemWithId(id);
    });
  });
}

function emptyCart() {
  const emptyButton = document.querySelector('.empty-cart');
  const cartListElement = document.querySelector(cartItemsClass);
  const subtotalElement = document.querySelector(totalPriceClass);
  emptyButton.addEventListener('click', () => {
    cartListElement.innerHTML = '';
    subtotalValue = 0;
    subtotalElement.innerText = 'Subtotal: R$ 0,00';
  });
}

async function start() {
  productsHandle();
  emptyCart();
  console.log(numberRounder(10.09));
}

window.onload = start;