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

const allProducts = async () => {
  const section = document.querySelector('.items');
  const result = await fetchProducts('computador');
  result.forEach((product) => {
   const items = { sku: product.id, name: product.title, image: product.thumbnail };
   section.appendChild(createProductItemElement(items));
  });
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// const cartItemClickListener = (event) => {
  // coloque seu código aqui
// };

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getElement = async () => {
  await allProducts();
  await fetchItem();

  const btn = document.querySelectorAll('.item__add');
  const itemSku = document.querySelectorAll('.item__sku');
  const itemName = document.querySelectorAll('.item__title');
  const olElement = document.querySelector('.cart__items');
  for (let i = 0; i < btn.length; i += 1) {
      const price = fetchItem(itemSku[i].innerText);
      btn[i].addEventListener('click', () => olElement.appendChild(createCartItemElement({ 
      sku: `${itemSku[i].innerText}`, 
      name: `${itemName[i].innerText}`, 
      salePrice: `${price}` }))); 
  }
};

window.onload = () => { allProducts(); getElement(); };