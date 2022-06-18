let subtotalValue = 0;

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

function showMoneyValueInPortuguese(value) {
  const reais = Math.floor(value);
  const centavos = (value - reais) * 100;
  let roundedCentavos;
  if (centavos - Math.floor(centavos) >= 0.5) {
    roundedCentavos = Math.floor(centavos) + 1;
  } else {
    roundedCentavos = Math.floor(centavos);
  }
  const displaySubtotal = `Subtotal: R$ ${reais}, ${roundedCentavos}`;
  return displaySubtotal;
}

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', () => {
    const parentElement = document.querySelector('.cart__items');
    parentElement.removeChild(li);
    const subtotalElement = document.querySelector('.total-price');
    subtotalValue -= salePrice;
    subtotalElement.innerText = showMoneyValueInPortuguese(subtotalValue);
  });
  return li;
};

async function insertCartItemWithId(id) {
  const productInfo = await fetchItem(id);
  const sku = productInfo.id;
  const name = productInfo.title;
  const salePrice = productInfo.price;
  const li = createCartItemElement({ sku, name, salePrice });
  const parentElement = document.querySelector('.cart__items');
  parentElement.appendChild(li);
  const subtotalElement = document.querySelector('.total-price');
  subtotalValue += salePrice;
  subtotalElement.innerText = showMoneyValueInPortuguese(subtotalValue);
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
  const cartListElement = document.querySelector('.cart__items');
  const subtotalElement = document.querySelector('.total-price');
  emptyButton.addEventListener('click', () => {
    cartListElement.innerHTML = '';
    subtotalValue = 0;
    subtotalElement.innerText = 'Subtotal: R$ 0,00';
  });
}

async function start() {
  productsHandle();
  emptyCart();
}

window.onload = start;