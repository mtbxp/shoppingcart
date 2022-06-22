const ol = document.querySelector('.cart__items');

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
  saveCartItems(ol.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sectionProtuctItems = document.querySelector('.items');
const productList = async () => {  
  const { results } = await fetchProducts('computador');
  results.forEach(({ id, title, thumbnail }) => {
    sectionProtuctItems
    .appendChild(createProductItemElement(({ sku: id, name: title, image: thumbnail })));
  });
};

const cartShopping = async (id) => {
  const fechCart = await fetchItem(id); 
  ol.appendChild(createCartItemElement({ 
    sku: fechCart.id, 
    name: fechCart.title,
    salePrice: fechCart.price, 
  }));
  saveCartItems(ol.innerHTML);
};

const productCartItem = async () => {
  const item = document.querySelectorAll('.item');
  item.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = getSkuFromProductItem(btn);
      await cartShopping(id);
  });
});
};

const getLocalStorage = () => {
  ol.innerHTML = getSavedCartItems();
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
  // if (result) {
  //   result.forEach((item) => {
  //     ol.appendChild(createCartItemElement({
  //       sku: item.id, 
  //       name: item.title,
  //       salePrice: item.price,
  //     }));
  //   });
  // } else {
  //   return null;
  // }
};

const btnRemove = document.querySelector('.empty-cart');
const removeCartItems = async () => {
    btnRemove.addEventListener('click', () => {
      while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
      }
    });
};

window.onload = async () => {  
  await productList();
  await productCartItem();
  getLocalStorage();
  await removeCartItems();
};
