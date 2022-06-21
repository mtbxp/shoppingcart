const classItems = document.querySelector('.items');
const cartItems = '.cart__items';
const constanteAuxiliar = document.querySelector(cartItems);
const action = document.querySelector('.empty-cart');

const carregando = () => {
  const element = document.createElement('div');
  element.innerHTML = 'carregando...';
  element.classList.add('loading');
  classItems.appendChild(element);
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
  event.target.closest('li').remove();
  const aux = document.querySelector(cartItems).innerHTML;
  saveCartItems(aux);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addShopping = () => {
    const element = (acc) => {
      const productsAcc = createCartItemElement(acc);
      productsAcc.addEventListener('click', cartItemClickListener);
      constanteAuxiliar.appendChild(productsAcc);
    };
    classItems.addEventListener('click', (event) => {
      if (event.target.classList.contains('item__add')) {
        const skuProductItem = getSkuFromProductItem(event.target.parentNode);
        fetchItem(skuProductItem).then((date) => {
          element(date);
          const tagPai = document.querySelector('.items');
          saveCartItems(tagPai);
        });  
      }
    });
};

const addProducts = async () => {
  const loading = document.querySelector('.loading');
  const listItems = await fetchProducts('computador');
  loading.remove();
  listItems.forEach((acc) => {
    const listProducts = createProductItemElement(acc);
    classItems.appendChild(listProducts);
  });
};

action.addEventListener('click', () => {
  document.querySelector('ol').innerHTML = '';
});

window.onload = () => { 
  carregando();
  addProducts();
  addShopping();
};
