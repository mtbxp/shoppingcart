const importItems = document.querySelector('.items');
const elementClass = document.querySelector('.cart__items');

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

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

  const cartItemClickListener = (event) => {
    event.target.remove();
    // localStorage.removeItem('cartItems');
    // console.log(event.target.innerText.slice(5, 18));
  const id = event.target.innerText.slice(5, 18);
  const memoryId = JSON.parse(localStorage.getItem('cartItems'));
  const findId = memoryId.filter((element) => id !== element.id);
  localStorage.setItem('cartItems', JSON.stringify(findId));
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const totalPrice = () => {
  // const priceSection = document.createElement('section');
  // priceSection.className = 'total-price';
  // cart.appendChild(priceSection);
  const idCartItem = document.querySelectorAll('.cart__item');
  console.log(idCartItem[0].innerHTML);
};

function addItems() {
  fetchProducts('computador').then((items) => {
  items.results.forEach((itemChild) => {
  importItems.appendChild(createProductItemElement(itemChild));
});
});
} 
const elementChild = (element) => {
  fetchItem(element).then((itemsId) => {
  elementClass.appendChild(createCartItemElement(itemsId));
  saveCartItems(itemsId);
  totalPrice();  
});
}; 
importItems.addEventListener('click', async (event) => {
  if (event.target.classList.contains('item__add')) {
    const findItem = event.target.parentNode.firstChild.innerHTML;
    await elementChild(findItem); 
  }
});

const load = async () => {
  const divLoad = document.createElement('div');
  divLoad.innerHTML = 'carregando...';
  divLoad.className = 'loading';
  importItems.appendChild(divLoad);
  await fetchProducts();
  divLoad.remove();
};

window.onload = () => { 
  addItems();
  getSavedCartItems(createCartItemElement);
  load();
};