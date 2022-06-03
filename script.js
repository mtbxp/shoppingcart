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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = () => {
  const items = document.querySelector('.items');
  fetchProducts('computador')
    .then((data) => data.results.forEach((element) =>
      items.appendChild(createProductItemElement(element))));
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('item__add')) {
      const itemID = e.target.parentNode.firstChild.innerText;
      fetchItem(itemID).then((item) =>
        document.querySelector('.cart__items').appendChild(createCartItemElement(item)));
      saveCartItems(document.querySelector('.cart__items'));
    }
    if (e.target.classList.contains('cart__item')) {
      cartItemClickListener(e);
    }
  });
};
