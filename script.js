const ol = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');

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

// const totalPriceSub = async (arg) => {
//   const inner = parseFloat(totalPrice.innerText);
//   const item = await fetchItem(arg);
//   const subValue = parseFloat(item.price);
//   // console.log(arg);
//   // totalPrice.innerText = inner - subValue;
// };

const totalpriceSum = async (param) => {
  const inner = +totalPrice.innerText;
  const item = await fetchItem(param);
  const value = parseFloat(item.price);
  const sum = inner + value;
  totalPrice.innerText = sum;
  localStorage.setItem('totalPrice', totalPrice.innerText); 
};

const cartItemClickListener = async (event) => {
  event.target.remove();

  console.log(event.target.innerHTML);
  await saveCartItems(ol.innerHTML);
  // totalPriceSub();
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
    totalpriceSum(itemPai);
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const child = event.target.parentNode.firstChild.innerText;
    CreateItems(child);

    const itemlocalStorage = document.querySelector('.cart__items');
    saveCartItems(itemlocalStorage.innerHTML);
 }

  if (event.target.classList.contains('empty-cart')) {
    ol.innerHTML = '';
    totalPrice.innerText = 0;
    localStorage.clear();
  }
});

getItemLocalStorage = () => {
  ol.innerHTML = getSavedCartItems();
  totalPrice.innerText = getSavedCartItems();
};

window.onload = () => { createItems('computador'); getItemLocalStorage(); };
