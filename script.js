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
  const click = event.target;
  const total = document.querySelector('.total-price').innerText;
  const itemPice = click.querySelector('.item__price').innerText;
  document.querySelector('.total-price').innerText = parseFloat(total) - parseFloat(itemPice);
  click.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'item__price';
  span.innerText = salePrice;
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.append(span);
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addAllComputers = async () => {
  const data = await fetchProducts('computador');
  data.results.forEach(({ id, title, thumbnail }) => {
    const result = ({
      sku: id,
      name: title,
      image: thumbnail,
    });
    const elemPai = document.querySelector('.items');
    return elemPai.appendChild(createProductItemElement(result));
  });
};

const addComputerCart = async (event) => {
  const clic = event.target;
  const sku = getSkuFromProductItem(clic.parentNode);
  const data = await fetchItem(sku);
  const results = ({
    sku: data.id,
    name: data.title,
    salePrice: data.price,
  });
  const total = document.querySelector('span.total-price').innerText;
  document.querySelector('span.total-price').innerText = parseFloat(total) + data.price;
  const elemPai = document.querySelector('.cart__items');
  return elemPai.appendChild(createCartItemElement(results));
};
const btn = document.querySelector('.items');
btn.addEventListener('click', addComputerCart);

const emptyCart = () => {
  const allItems = document.querySelectorAll('li');
  for (let i = 0; i < allItems.length; i += 1) {
    allItems[i].remove();
  }
  document.querySelector('span[class="total-price"]').innerText = '0.00';
};
const btnEmpty = document.querySelector('button[class="empty-cart"]');
btnEmpty.addEventListener('click', emptyCart);

window.onload = () => { addAllComputers(); };
