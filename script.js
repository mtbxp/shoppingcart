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
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sectionProtuctItems = document.querySelector('.items');
const productList = async () => {  
  const { results } = await fetchProducts('computador');
  results.forEach(({ id, title, thumbnail }) => {
    sectionProtuctItems
    .appendChild(createProductItemElement(({ sku: id, name: title, image: thumbnail })));
  });
};

const productCartItem = async () => {
  const button = document.querySelectorAll('.item__add'); // referencia https://www.w3schools.com/js/js_htmldom_elements.asp
  button.forEach((btn) => { 
    btn.addEventListener('click', async (event) => {
      const id = getSkuFromProductItem(event.target.parentElement);
      const result = await fetchItem(id);
      const ol = document.querySelector('.cart__items');
      ol.appendChild(createCartItemElement({ 
      sku: result.id,
      name: result.title,
      salePrice: result.price,
    }));
  });
});
};

window.onload = async () => {  
 await productList();
  await productCartItem();
};
