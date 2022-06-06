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
  click.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
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
  const sku = clic.parentElement.firstChild.innerText;
  const data = await fetchItem(sku);
  const results = ({
    sku: data.id,
    name: data.title,
    salePrice: data.price,
  });
  const elemPai = document.querySelector('.cart__items');
  return elemPai.appendChild(createCartItemElement(results));
};
const btn = document.querySelector('.items');
btn.addEventListener('click', addComputerCart);

window.onload = () => { addAllComputers(); };
