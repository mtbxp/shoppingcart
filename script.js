const classItems = document.getElementById('itemsList');
const cartList = document.querySelector('.cart__items');

// console.log(btnAddToCart);

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

const getItems = (item) => {
  const productItem = fetchItem(item)
    .then((data) => data);
    return productItem;
};
// console.log(createProductObject('computer'));

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText, sku) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.addEventListener('click', () => {
      clickAddCart(sku);
    });
  }
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku));

  return classItems.appendChild(section);
};
// console.log(fetchItem('MLB1341706310'));

const createProductList = async () => {
  const getElementsList = await createProductObject('computer');
  const createElementList = getElementsList.forEach((element) => createProductItemElement(element));
  return createElementList;
};

createProductList();
// getProductList('computer');

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  cartList.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  // console.log(li);
  return cartList.appendChild(li);
};

const createItemObject = async (item) => {
  const itemInfo = await Object(getItems(item));
  const objectItem = { sku: itemInfo.id,
    name: itemInfo.title,
    salePrice: Number(itemInfo.price) };
    
    return createCartItemElement(objectItem);
  };
  
  const clickAddCart = (event) => {
    createItemObject(event);
  };

window.onload = () => { };
