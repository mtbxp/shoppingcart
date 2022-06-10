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

const getCartItemElement = async (e) => {
  await fetchItem(e);
  
  const OL = document.querySelector('.cart__items');
  const buttonsAdd = document.querySelectorAll('.item__add');

  buttonsAdd.forEach((button) => {
    button.addEventListener('click', async () => {
      const itemId = getSkuFromProductItem(button.parentElement); 
      const itemValues = await fetchItem(itemId);
      const itemSelected = createCartItemElement(itemValues);
      OL.appendChild(itemSelected);
    });
  });
};
getCartItemElement();

const start = async () => {
  const { results } = await fetchProducts('computador');
  const ITEMS = document.querySelector('.items');

  results.forEach((e) => ITEMS.appendChild(createProductItemElement(e)));
  return results;
};

window.onload = start;
