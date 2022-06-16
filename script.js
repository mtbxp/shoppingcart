const loading = () => {
  const showLoading = document.createElement('h2');
  showLoading.className = 'loading';
  showLoading.innerText = 'carregando...';
  document.body.append(showLoading);
};

const removeLoading = () => {
  const showLoading = document.querySelector('.loading');
  showLoading.remove();
};

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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.parentElement.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `
SKU: ${sku} |
 NAME: ${name} |
 PRICE: $${salePrice}`;

  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = document.querySelector('.items');
const productList = async () => {  
  loading();
  const { results } = await fetchProducts('computador');
  removeLoading();
  results.forEach(({ id, title, thumbnail }) => {
    createProductList
      .appendChild(createProductItemElement(({ sku: id, name: title, image: thumbnail })));
    });
};
const olCartItem = document.querySelector('.cart__items');

const addCartItem = async () => {
  const selectButton = document.querySelectorAll('.item__add');
  // referenciar do stackoverflow para fazer forEach de um querySelectorAll
    selectButton.forEach((element) => {
        element.addEventListener('click', async (event) => {
     const selectParentElement = getSkuFromProductItem(event.target.parentElement);
     loading();
     const parentElement = await fetchItem(selectParentElement);
     removeLoading();
   olCartItem.appendChild(createCartItemElement(({ 
     sku: parentElement.id,
     name: parentElement.title,
     salePrice: parentElement.price,
   })));
   saveCartItems(parentElement); 
// CONTINUAR A PARTIR DAQUI
  });
});
};

const emptyCartButton = document.querySelector('.empty-cart');
const removeAllItems = async () => {
    emptyCartButton.addEventListener('click', () => {
      while (olCartItem.hasChildNodes()) {
        olCartItem.removeChild(olCartItem.firstChild);
      }
    });
};

window.onload = async () => {  
  await productList();
  await addCartItem();
  await saveCartItems();
  await removeAllItems();
};