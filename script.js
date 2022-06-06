const classItems = document.getElementById('itemsList');

const getProducts = async (product) => {
  const list = fetchProducts(product)
  .then((data) => data.results);
  return list;
};

const createProductObject = async (product) => {
  const productList = await Object(getProducts(product));
  
  return productList.map((element) => {
    const objProducts = { sku: '', name: '', image: '' };
    objProducts.sku = element.id;
    objProducts.name = element.title;
    objProducts.image = element.thumbnail;
    return objProducts;
  });
};

// console.log(createProductObject('computer'));
// getProductList('computer');

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
  console.log(section);
  return classItems.appendChild(section);
};

const createProductList = async () => {
  const getElementsList = await createProductObject('computer');
  const createElementList = getElementsList.forEach((element) => createProductItemElement(element));
  return createElementList;
};

createProductList();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// console.log(fetchProducts('computer'));


window.onload = () => { };
