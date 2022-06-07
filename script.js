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

const sumTotal = () => {
  let soma = 0;
  const getOl = document.querySelector('.total-price');
  const getLi = document.querySelectorAll('li');
  getLi.forEach((elemet) => {
    soma += parseFloat(elemet.innerHTML.split('$')[1]);
  });
  getOl.innerHTML = soma;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(getListCarts.innerHTML);
  sumTotal();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

getListCarts.addEventListener('click', cartItemClickListener);

const addEventItem = () => {
  getSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const id = getSkuFromProductItem(event.target.parentNode);
      fetchItem(id).then((data) => {
        const creatElementItem = createCartItemElement(data);
        getListCarts.appendChild(creatElementItem);
        saveCartItems(getListCarts.innerHTML);
        sumTotal();
      });
    }
  });
};

const btnBtnClearCart = () => {
  const getBtn = document.querySelector('.empty-cart');
  getBtn.addEventListener('click', () => {
    localStorage.clear();
    document.querySelector('ol').innerHTML = '';
    document.querySelector('.total-price').innerHTML = 0;
  });
};

window.onload = () => {
  const div = document.createElement('span');
  div.className = 'loading';
  div.innerHTML = 'carregando...';
  getSection.appendChild(div);
  fetchProducts('computador')
  .then((itens) => {
    document.querySelector('.loading').remove();
    itens.results.forEach((product) => {
    const createDivsItens = createProductItemElement(product);
    getSection.appendChild(createDivsItens);
  });
});

  addEventItem();
  getSavedCartItems();
  sumTotal();
  btnBtnClearCart();
};
