const getSection = document.querySelector('.items');
const getListCarts = document.querySelector('.cart__items');

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
  // coloque seu código aquii
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addEventItem = () => {
  getSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const id = getSkuFromProductItem(event.target.parentNode);
      fetchItem(id).then((data) => {
        console.log(getListCarts);
        const creatElementItem = createCartItemElement(data);
        getListCarts.appendChild(creatElementItem);
      });
    }
  });
};

window.onload = () => {
  fetchProducts('computador')
  .then((itens) => itens.results.forEach((product) => {
    const createDivsItens = createProductItemElement(product);
    getSection.appendChild(createDivsItens);
  }));

  addEventItem();
  // fetchItem('MLB161576052');
};
