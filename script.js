const ol = document.querySelector('.cart__items');

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

const createItems = async (param) => {
  const items = document.querySelector('.items');

  const productArray = (await fetchProducts(param)).results;
    productArray.forEach((element) => {
      const { id, title, thumbnail } = element;
      const elementoProduto = createProductItemElement({
        id,
        title,
        thumbnail,
      });
  
      items.appendChild(elementoProduto);
    });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
event.target.remove();

saveCartItems(ol.innerHTML);
};

ol.addEventListener('click', cartItemClickListener);

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  
  return li;
};

const CreateItems = (itemPai) => {
  fetchItem(itemPai).then((elementPai) => ol.appendChild(createCartItemElement(elementPai))
    .then(saveCartItems(ol.innerHTML)));
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const child = event.target.parentNode.firstChild.innerText;
    CreateItems(child);

    const itemlocalStorage = document.querySelector('.cart__items');
    saveCartItems(itemlocalStorage.innerHTML);
 }
});

getItemLocalStorage = () => {
  ol.innerHTML = getSavedCartItems();
  // console.log(ol.innerHTML);
};

window.onload = () => { createItems('computador'); getItemLocalStorage(); };
