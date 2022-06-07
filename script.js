const priceParagraph = document.querySelector('p');

if (localStorage.getItem('prices') === null) {
  priceParagraph.innerText = 0;
} else {
  const getPrice = localStorage.getItem('prices');
  priceParagraph.innerText = getPrice;
}

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

// Obs.: O código para arredondar valores abaixo foi baseado em um post do StackOverflow
function roundFloats(value) {
  return Math.round(value * 100) / 100;
}

function sumCartItems({ price }) {
  let actualPrice = JSON.parse(localStorage.getItem('prices'));
  actualPrice += price;
  localStorage.setItem('prices', roundFloats(actualPrice));
  return roundFloats(actualPrice);
}

function pricesSub(price) {
  let actualPrice = localStorage.getItem('prices');
  actualPrice -= price;
  localStorage.setItem('prices', roundFloats(actualPrice));
  return roundFloats(actualPrice);
}

const createCartItemElement = ({ id, title, price }, listFather) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (event) => {
    priceParagraph.innerText = pricesSub(price);
    event.target.remove();
    saveCartItems(listFather.innerHTML);
  });
  return li;
};

const createProductItemElement = ({ id, title, thumbnail }, listFather) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const cartButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  cartButton.addEventListener('click', async () => {
    const data = await fetchItem(id);
    listFather.appendChild(createCartItemElement(data, listFather));
    saveCartItems(listFather.innerHTML);
    priceParagraph.innerText = sumCartItems(data);
  });
  
  section.appendChild(cartButton);

  return section;
};

const addItems = async (name, fatherEle, listFather) => {
  const data = await fetchProducts(name);
  for (let index = 0; index < 50; index += 1) {
    const info = data[index];
    fatherEle.appendChild(createProductItemElement(info, listFather));
  }
};

function addListenerToSavedItems(newList, list) {
  for (let index = 0; index < newList.length; index += 1) {
    const getList = newList[index];
    getList.addEventListener('click', async (event) => {
      event.target.remove();
      localStorage.setItem('cartItems', JSON.stringify(list.innerHTML));
      const id = getList.innerText.slice(5, 18);
      const data = await fetchItem(id);
      priceParagraph.innerText = pricesSub(data.price);
    });
  }
}

window.onload = () => {
  const getClearButton = document.querySelector('.empty-cart');
  const itemsSection = document.querySelector('.items');
  const list = document.querySelector('ol');

  getClearButton.addEventListener('click', () => {
    list.innerHTML = '';
    localStorage.removeItem('cartItems');
    localStorage.removeItem('prices');
    priceParagraph.innerText = 0;
  });

  addItems('computador', itemsSection, list);

  list.innerHTML = JSON.parse(getSavedCartItems());

  const savedLi = document.getElementsByClassName('cart__item');
  addListenerToSavedItems(savedLi, list);
};
