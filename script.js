const cartItems = document.querySelector('.cart__items');

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
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const product = async () => {
  const items = await fetchProducts();
  const result = items.results.map((prod) => ({
    sku: prod.id,
    name: prod.title,
    image: prod.thumbnail,
  }));
  return result;
};

const productFormat = async (productResult) => ({
  sku: productResult.id,
  name: productResult.title,
  salePrice: productResult.price,
});

const window1 = async () => {
  const products = await product();
  products.forEach((prod) => {
    const divItems = document.querySelector('.items');
    const section = createProductItemElement(prod);
    divItems.appendChild(section);
  });
};

const calc = async () => {
  const price = document.querySelector('.total-price');
  let value = 0;
  document.querySelectorAll('.cart__item')
    .forEach((element) => {
      value += parseInt(element.innerHTML.split('$')[1], 10);
    });
  price.innerHTML = `${value}$`;
};

const window2 = async () => {
  const divAdd = document.querySelectorAll('.item__add');
  divAdd.forEach((prod) => {
    prod.addEventListener('click', async (event) => {
      getSavedCartItems();
      const prodId = event.target.parentNode.firstChild.innerText;
      const resultItem = await fetchItem(prodId);
      const resultItemFormat = await productFormat(resultItem);
      const result = createCartItemElement(resultItemFormat);
      cartItems.appendChild(result);
      saveCartItems(cartItems.innerHTML);
      calc();
    });
  });
};

window.onload = async () => {
  cartItems.innerHTML = getSavedCartItems();
  document.querySelectorAll('.cart__item')
    .forEach((element) => element.addEventListener('click', cartItemClickListener));
  await window1();
  await window2();
  calc();
};
