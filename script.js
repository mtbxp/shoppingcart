const classCartItems = '.cart__items';
const items = document.querySelector('.items');

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = () => {
  fetchProducts('computador').then((data) => {
    const arrayProducts = data.results;
    arrayProducts.forEach((element) => {
      const item = createProductItemElement(element);
      items.appendChild(item);
    });
    console.log(arrayProducts);
  });
};

const addToCart = (data) => {
  const cart = document.querySelector(classCartItems);
  const itemCart = createCartItemElement(data);
  itemCart.addEventListener('click', (event) => {
    event.target.remove();
    const olHtml = document.querySelector(classCartItems).innerHTML;
    saveCartItems(olHtml);
  });
  cart.appendChild(itemCart);
};

const addEventToItems = () => {
  items.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const id = getSkuFromProductItem(event.target.parentNode);
      fetchItem(id).then((data) => {
        addToCart(data);
        const olHtml = document.querySelector(classCartItems).innerHTML;
        saveCartItems(olHtml);
      });  
    }
  });
};

const loadLocalStorage = () => {
  // if (getSavedCartItems() === null) {
    
  // }
  const olList = document.querySelector('ol');
  console.log(olList.innerHTML = getSavedCartItems());
  olList.innerHTML = getSavedCartItems();
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', (e) => {
      console.log('teste');
      e.target.remove();
      const olHtml = document.querySelector(classCartItems).innerHTML;
      saveCartItems(olHtml);
    });
  });
};

window.onload = () => { 
  createProductList();
  addEventToItems();
  loadLocalStorage();
};
