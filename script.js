const productsSection = document.querySelector('.items');
const cartSection = document.querySelector('.cart__items');

const priceSection = (finalPrice) => {
  const section = document.querySelector('.total-price');
  // Para 'Math.round(finalPrice * 100) / 100' foi consultado o StackOverflow (https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary)
  section.innerText = (Math.round(finalPrice * 100) / 100);
  return section;
};

const getPrice = async (item) => {
    const data = await fetchItem(item);
    const { price } = data;
    return price;
};

const totalPrice = async () => {
  const productsList = cartSection.children;
  const elementsArray = [...productsList];
  const data = elementsArray.map((element) => element.innerText)
    .map((product) => {
      const array = product.split(' | ');
      // Para 'substring' foi consultado a documentação no MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 
      return array[0].substring(5, array[0].length);
    })
    .map((element) => getPrice(element));
    // Para 'Promise.all()' foi consultado o StackOverflow (https://pt.stackoverflow.com/questions/532440/como-chamar-dentro-de-um-map-uma-fun%C3%A7%C3%A3o-que-retorna-uma-promise)
  const pricesArray = await Promise.all(data);
  const finalPrice = pricesArray.reduce((acc, item) => acc + item, 0);
  priceSection(finalPrice);
};

const cartItemClickListener = (event) => {
  const li = event.target;
  li.remove();
  saveCartItems(cartSection.innerHTML);
  totalPrice();
  return li;
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
};

const createCartList = async (product) => {
  try {
    const data = await fetchItem(product);
    cartSection.appendChild(createCartItemElement(data));
    saveCartItems(cartSection.innerHTML);
    totalPrice();
  } catch (error) {
    cartSection.innerHTML = `<h1>${error}</h1>`;
  }
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// A função 'buttonEvent' e a condição 'if' na função 'createCustomElement' foram criados com o auxilio e orientação do Vitor Tomaz - Turma 22 - Tribo A, e da Raissa Vasconcelos, Eliel Oliveira, e Gustavo Menezes - Turma 22 - Tribo B ;

const buttonEvent = (event) => {
  const section = event.target.parentElement;
  const id = getSkuFromProductItem(section);
  createCartList(id);
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;

  if (element === 'button') {
    e.addEventListener('click', buttonEvent);
  }

  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const createProductsList = async () => {
  try {
    const data = await fetchProducts('computador');
    data.results.forEach((element) => {
      productsSection.appendChild(createProductItemElement(element));
    });
  } catch (error) {
    productsSection.innerHTML = `<h1>${error}</h1>`;
  }
};

const removeEvent = () => {
  const li = document.querySelectorAll('.cart__item');
  li.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

const localStorageInfo = () => {
  cartSection.innerHTML = getSavedCartItems();
  removeEvent();
  totalPrice();
};

const cleanCart = () => {
  const clearButton = document.querySelector('.empty-cart');
  clearButton.addEventListener('click', () => {
    cartSection.innerHTML = '';
    totalPrice();
  });
};

window.onload = () => { 
  createProductsList();
  localStorageInfo();
  cleanCart();
};
