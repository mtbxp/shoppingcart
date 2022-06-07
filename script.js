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

const cartItemClickListener = (event) => {
  event.srcElement.remove();
};

const createCartItemElement = (sku, name, price) => {
  const li = document.createElement('li');
  const list = document.querySelector('.cart__items');
  const cartItems = `SKU: ${sku}

  NAME: ${name}
  
  PRICE: $${price}`;
  li.className = 'cart__item';
  li.innerText = cartItems;
  li.addEventListener('click', cartItemClickListener);
  list.appendChild(li);
  return li;
};

const createProductItemElement = (sku, name, image) => {
  const section = document.createElement('section');
  section.className = 'item';
  const mens = 'Adicionar ao carrinho!';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  const button = section.appendChild(createCustomElement('button', 'item__add', mens));
  button.addEventListener('click', async () => {
    const infoItem = await fetchItem(sku);
    const { id, title, price } = infoItem;
    createCartItemElement(id, title, price);
  });

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = async () => {
  const func = await fetchProducts('computador');
  const result = func.results;
  result.forEach((item) => {
    const { id, title, thumbnail } = item;
    let smallerTitle = '';
    for (let index = 0; index < 37; index += 1) {
      smallerTitle += title[index];
      if (index === 36) {
        smallerTitle += ' ...';
      }
    }
    const section = createProductItemElement(id, smallerTitle, thumbnail);
    const items = document.querySelector('.items');
    items.appendChild(section);
  });
  getSavedCartItems();
};
