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
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const carroItem = document.querySelectorAll('.cart__items')[0];
  carroItem.appendChild(li);
  return li;
};
const insereItem = async (item) => {
  const it = await fetchItem(item);
  it.forEach(({ id, title, price }) => {
    const objItem = {
      sku: it.id,
      name: it.title,
      salePrice: it.price,
    };
    createCartItemElement(objItem);
  });
};

const insereLista = async () => {
  const itens = await fetchProducts('computador');
  itens.forEach(({ id, title, thumbnail }) => {
    const obj = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    const inner = createProductItemElement(obj);
    document.getElementsByClassName('items')[0].appendChild(inner);
  });
};
window.onload = () => {
  insereLista();
};
