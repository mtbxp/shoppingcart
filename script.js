/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const sectionItems = document.querySelector('.items');
const olCartItems = document.querySelector('.cart__items');
const spanTotalPrice = document.querySelector('.total-price');
const clearCartBtn = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource, className) => {
  const img = document.createElement('img');
  img.className = className;
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image, price }) => {
  const section = document.createElement('section');
  section.className = 'bg-white item flex flex-wrap basis-[25%] rounded-md border-2 border-shadow-bd p-4 grow m-1 justify-end';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image, 'item__image w-28 h-28'));
  section
    .appendChild(createCustomElement(
      'span',
      'item__title text-sm flex items-center basis-1/2 grow p-2',
      name,
    ));
    const priceFloat = `R$ ${Number(price).toFixed(2)}`;
  section.appendChild(createCustomElement(
    'span',
    'item_price text-be-trybe self-start font-bold animate-pulse',
    priceFloat,
  ));
  section.appendChild(createCustomElement(
    'button',
    'flex font-bold w-full justify-center items-center text-white text-[12px] align-middle item__add grow p-4 h-8 self-end bg-[#03342d] rounded-md cursor-pointer hover:bg-[#054d42] mt-2',
    'Adicionar ao Carrinho!',
  ));
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const updateCartTotal = (element) => {
  let totalPrice = 0;
  if (element.innerHTML !== '') {
    element.querySelectorAll('section').forEach(async (cartItem) => {
      const productId = getSkuFromProductItem(cartItem);
      const productPrice = await fetchItem(productId);
      totalPrice += Number(productPrice.price);
      spanTotalPrice.innerText = Math.round(totalPrice * 100) / 100;
    });
  } else {
    spanTotalPrice.innerText = 0;
  }
};

const cartItemClickListener = (event) => {
  if (event.target.classList.contains('remove-item')) {
    const cartItem = event.target;
    cartItem.parentElement.parentElement.removeChild(cartItem.parentElement);
    updateCartTotal(olCartItems);
    saveCartItems(olCartItems.innerHTML);
  }
};

const createProductCartElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'cart-item flex flex-wrap basis-[40%] rounded-md p-2 grow m-1 bg-white';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image, 'item__image w-14 h-14'));
  section
    .appendChild(createCustomElement(
      'span',
      'item__title flex items-center basis-1/2 grow p-2 text-xs',
      name,
    ));
  section.appendChild(createCustomElement(
    'button',
    'remove-item self-start hover:text-[#FF0000]',
    'x',
  ));
  return section;
};

const createCartItemElement = (product) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.appendChild(createProductCartElement(product));
  return li;
};

clearCartBtn.addEventListener('click', () => {
  olCartItems.textContent = '';
  spanTotalPrice.innerText = 0;
  saveCartItems(olCartItems.innerHTML);
});

olCartItems.addEventListener('click', cartItemClickListener);

sectionItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const productId = getSkuFromProductItem(event.target.parentElement);
    fetchItem(productId)
      .then((product) => {
        olCartItems.appendChild(createProductCartElement(product));
        updateCartTotal(olCartItems);
        saveCartItems(olCartItems.innerHTML);
      });
  }
});

const toggleLoading = () => {
  if (document.querySelector('.loading')) {
    sectionItems.removeChild(document.querySelector('.loading'));
  } else {
    const div = document.createElement('div');
    div.classList.add('loading');
    sectionItems.appendChild(div);
  }
};

toggleLoading();
fetchProducts('computador')
  .then((products) => {
    products.results.forEach((product) => {
      sectionItems.appendChild(createProductItemElement(product));
    });
    toggleLoading();
  });

window.onload = () => {
  getSavedCartItems();
  updateCartTotal(olCartItems);
};
