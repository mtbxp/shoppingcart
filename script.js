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

const appendElementToItems = (element) => {
  const elementSectionItems = document.getElementsByClassName('items')[0];
  elementSectionItems.appendChild(element);
};

const refreshSave = () => {
  const elementCartChildren = document.getElementsByClassName('cart__items')[0].children;
  const arrayOfTextItems = ['0'];
  for (let index = 0; index < elementCartChildren.length; index += 1) {
  const infoItem = elementCartChildren[index].innerText;
  arrayOfTextItems.push(infoItem);
  }
  saveCartItems(JSON.stringify(arrayOfTextItems));
};

const removeItemCart = (event) => {
    event.target.remove();
    refreshSave();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', removeItemCart);
  return li;
};

const appendElementCart = (element) => {
  const elementCartItems = document.getElementsByClassName('cart__items')[0];
  elementCartItems.appendChild(element);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const getItemByIDButton = async (ev) => {
  if (ev.target.nodeName === 'BUTTON') {
    const skuID = getSkuFromProductItem(ev.target.parentElement);
    const infoItem = await fetchItem(skuID);
    const itemCartElement = createCartItemElement(infoItem);
    appendElementCart(itemCartElement);
    console.log('a');
    refreshSave();
  }
};

const addEventToButtonsItems = () => {
  const elementsItems = document.getElementsByClassName('items')[0].children;
  console.log(elementsItems.length);
  for (let index = 0; index < elementsItems.length; index += 1) {
    elementsItems[index].addEventListener('click', getItemByIDButton);
  }
};

const runCreateProduct = async () => {
  const results = await fetchProducts('computador');
  console.log(results.length);
  results.forEach((item) => {
    const { id, title, thumbnail } = item;
    const obj = { sku: id, name: title, image: thumbnail };
    const elementItem = createProductItemElement(obj);
    appendElementToItems(elementItem);
  });
  addEventToButtonsItems();
};

const appendSavedItemsCart = (arrayOfInnerTexts) => {
  arrayOfInnerTexts.forEach((text) => {
    const elementCart = document.getElementsByClassName('cart__items')[0];
    const elementLi = document.createElement('li');
    elementLi.className = 'cart__item';
    elementLi.innerText = text;
    elementLi.addEventListener('click', removeItemCart);
    if (text !== '0') elementCart.appendChild(elementLi);
  });
};

const loadSave = () => {
  const savedItems = JSON.parse(getSavedCartItems());
  if (savedItems) {
  appendSavedItemsCart(savedItems);
}
};

window.onload = () => { 
  runCreateProduct(); 
  loadSave();
};
