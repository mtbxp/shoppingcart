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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove()
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const cartItemElement = async (id) => {
  const item = await fetchItem(id);
  const dataElement = { sku: item.id, name: item.title, salePrice: item.price };
  const olElement = document.querySelector('.cart__items');
  const newElement = createCartItemElement(dataElement);
  olElement.appendChild(newElement);
};

const buttonListener = () => {
  const btn = document.querySelectorAll('.item__add');
    for (let i = 0; i < btn.length; i += 1) {
    const parentBtn = btn[i].parentNode;
    const itemSku = getSkuFromProductItem(parentBtn);
    btn[i].addEventListener('click', () => cartItemElement(itemSku));
}
};

window.onload = async () => { await allProducts(); buttonListener(); };