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
  let sku = '';
  for (let index = 5; index <= 17; index += 1) {
    sku += event.srcElement.innerText[index];
  }
  const arr = getSavedCartItems();
  const obj = arr.find((item) => item.id === sku);
  arr.splice(arr.indexOf(obj), 1);
  saveCartItems(arr);
};

const createCartItemElement = (sku, name, price) => {
  const li = document.createElement('li');
  const list = document.querySelector('.cart__items');
  const cartItems = `SKU: ${sku} | NAME: ${name} | PRICE: $${price}`;
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
    const { id, title, price } = await fetchItem(sku);
    createCartItemElement(id, title, price);
    let arr = [];
    if (localStorage.length > 0) {
      arr = getSavedCartItems();
    }
    arr.push({ sku: id, name: title, salePrice: price });
    saveCartItems(arr);
  });
  return section;
};

const clearCart = () => {
  saveCartItems([]);
};

const compactResult = (result) => {
  result.forEach((item) => {
    const { id, title, thumbnail } = item;
    let smallerTitle = '';
    for (let index = 0; smallerTitle.length < 37; index += 1) {
      smallerTitle += title[index];
    }
    smallerTitle += ' ...';
    const section = createProductItemElement(id, smallerTitle, thumbnail);
    const items = document.querySelector('.items');
    items.appendChild(section);
  });
};

window.onload = async () => {
  const section = document.querySelector('.items');
  const loading = createCustomElement('p', 'loading', 'carregando...');
  section.appendChild(loading);
  const func = await fetchProducts('computador');
  const result = func.results;
  compactResult(result);
  loading.remove();
  const arr = getSavedCartItems();
  arr.forEach((obj) => {
    createCartItemElement(obj.sku, obj.name, obj.salePrice);
  });
  document.querySelector('.empty-cart').addEventListener('click', clearCart);
};
