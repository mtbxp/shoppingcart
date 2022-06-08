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

const createProductItemElement = (sku, name, image) => {
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

const addCartItems = async (event) => {
  const cartContainer = document.getElementsByClassName('cart__items')[0];
  const targetID = event.target.parentElement.firstChild.innerText;
  const targetInfo = await fetchItem(targetID);
  cartContainer.appendChild(createCartItemElement(targetInfo));
};

window.onload = async () => {
  const itemsContainer = document.getElementsByClassName('items')[0];
  const objResult = await fetchProducts('computador');
  objResult.results
    .forEach(({ id, title, thumbnail }) => {
      itemsContainer.appendChild(createProductItemElement(id, title, thumbnail));
    });
  const arrayOfButtons = document.querySelectorAll('.item__add');
  arrayOfButtons.forEach((button) => {
    button.addEventListener('click', addCartItems);
  });
  
};
