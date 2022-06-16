const productList = document.querySelector('.items');
const addList = document.querySelector('.cart__items');
const addValue = document.querySelector('.total-price');

const sumPrice = () => {
  let price = 0;
  const sum = document.querySelectorAll('.cart__item');
  /* for (let index = 0; index < sum.length; index += 1) {
    price += sum[index].salePrice;
  } */
  sum.forEach((sumList) => {
    price += parseFloat(sumList.innerHTML.split('$')[1] * 100);
  });
  addValue.innerHTML = price / 100;
};

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
  sumPrice();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createListProduct = async () => {
  const valeu = await fetchProducts('computador');
  valeu.results.forEach((item) => {
    const { id: sku, title: name, thumbnail: image } = item;
    const objec = createProductItemElement({ sku, name, image });
    productList.appendChild(objec);
  });
};

const select = () => {
  productList.addEventListener('click', async (element) => {
    if (element.target.classList.contains('item__add')) {
      const Selec = getSkuFromProductItem((element.target.parentNode));
      const dados = await fetchItem(Selec);
      const { id: sku, title: name, price: salePrice } = dados;
      addList.appendChild(createCartItemElement({ sku, name, salePrice }));
      // saveCartItems();
      sumPrice();
    }
 });
};

/* const saveStorage = () => {
  
} */

  document.querySelector('.empty-cart').addEventListener('click', () => {
    addList.innerHTML = '';
    addValue.innerHTML = '';
  });


window.onload = async () => {
  await createListProduct();
  select();
 };
