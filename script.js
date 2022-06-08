const listProducts = document.querySelector('.items');
const sectionChart = document.querySelector('.cart__items');
const totalprice = document.querySelector('.total-price');

const pricesChart = JSON.parse(localStorage.getItem('prices')) || [];

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
// console.log(getSkuFromProductItem);

const somaPrecos = (array) => array.reduce((a, b) => {
    if (array === []) {
      console.log('teste');
      totalprice.innerText = 0;
    }
    return a + b;
  }, 0);

const cartItemClickListener = (event) => { 
  const itemChart = event.target;
  itemChart.remove();
  saveCartItems(sectionChart.innerHTML);
  const pricesPerItem = Number(itemChart.innerText.split('$')[1]);
  const attPrice = pricesChart.indexOf(pricesPerItem);
  pricesChart.splice(attPrice, 1);
  localStorage.setItem('prices', JSON.stringify(pricesChart));
  getSavedCartItems();
  somaPrecos(pricesChart);
  totalprice.innerText = somaPrecos(pricesChart);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  const pricesPerItem = Number(li.innerText.split('$')[1]);
  pricesChart.push(pricesPerItem);
  localStorage.setItem('prices', JSON.stringify(pricesChart));
  totalprice.innerText = somaPrecos(pricesChart);  
  return li;
};

const getPricesItems = () => localStorage.getItem('prices');
// console.log(getPricesItems);

sectionChart.addEventListener('click', cartItemClickListener);

const fetchId = async (event) => {
  const id = event.target.parentNode.firstChild.innerText;
  const product = await fetchItem(id);
  const item = createCartItemElement(product);
  sectionChart.appendChild(item);
  saveCartItems(sectionChart.innerHTML);
};

const allProducts = async () => {
  await fetchProducts('computador')
  .then((products) => products.results
  .forEach((product) => {
    const sectionCreate = createProductItemElement(product);
    sectionCreate.lastChild.addEventListener('click', fetchId);
    listProducts.appendChild(sectionCreate);
  }));
};

const itemsLoad = () => {
  sectionChart.innerHTML = getSavedCartItems();
};

window.onload = () => {
  allProducts();
  itemsLoad();
};
