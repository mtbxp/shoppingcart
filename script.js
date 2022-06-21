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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;


const cartItemClickListener = (event) => {
 const parentNode = document.querySelector('.cart__items');
 parentNode.removeChild(event.path[0]);
};

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductsCart = async (event) => {
  const classCartItems = document.querySelector('.cart__items');

  const product = await fetchItem(event.path[1].childNodes[0].innerHTML);
  
  const productId = product.id;
  const productName = product.title;
  const productPrice = product.price;
 
  const finalCart = createCartItemElement(productId, productName, productPrice);
  classCartItems.appendChild(finalCart);
};

const getProducts = async () => {
  const classItens = document.querySelector('.items');
  const products = await fetchProducts('computador');
   const result = products.results; 
   result.forEach((product) => {
     const sku = product.id;
     const name = product.title;
     const image = product.thumbnail;
      
     const productCard = createProductItemElement(sku, name, image);
     classItens.appendChild(productCard);
    
     productCard.children[3].addEventListener('click', addProductsCart);
});
};

const emptyCart = () => {
  const items = document.querySelectorAll('li');
  items.forEach((element) => element.remove());
};

const buttonEmpty = document.querySelector('.empty-cart');
buttonEmpty.addEventListener('click', emptyCart);

window.onload = () => { 
  getProducts();
};
