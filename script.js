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

const createCartItemElement = ({ id, title, price }, listFather) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (event) => {
    event.target.remove();
    saveCartItems(listFather.innerHTML);
  });
  return li;
};

const createProductItemElement = ({ id, title, thumbnail }, fatherEle, listFather) => {
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
  });
  
  section.appendChild(cartButton);

  return section;
};

const addItems = async (name, fatherEle, listFather) => {
  const data = await fetchProducts(name);
  for (let index = 0; index < 50; index += 1) {
    const info = data[index];
    fatherEle.appendChild(createProductItemElement(info, fatherEle, listFather));
  }
};

function addListenerToSavedItems(newList, list) {
  for (let index = 0; index < newList.length; index += 1) {
    newList[index].addEventListener('click', (event) => {
      event.target.remove();
      localStorage.setItem('cartItems', JSON.stringify(list.innerHTML));
    });
  }
}

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => {
  const itemsSection = document.querySelector('.items');
  const list = document.querySelector('ol');

  addItems('computador', itemsSection, list);

  list.innerHTML = JSON.parse(getSavedCartItems());

  const savedLi = document.getElementsByClassName('cart__item');
  addListenerToSavedItems(savedLi, list);
};
