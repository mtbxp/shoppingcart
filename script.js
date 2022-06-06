const ItemList = document.querySelector('.cart__items');
const sectionItens = document.querySelector('.items');
const totalPrice = document.querySelector('.total-price');
const clearBtn = document.querySelector('.empty-cart');

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

const sumTotal = (element) => {
  let sum = 0;
  if (element.innerHTML !== '') {
    document.querySelectorAll('li').forEach(async (cart) => {
      const p = cart.innerText.split('$')[1];
      const b = parseFloat(p) * 100;
      sum += b / 100;
      totalPrice.innerText = sum;
    });
  } else {
    totalPrice.innerText = 0;
  }
  console.log(sum);
};

const cartItemClickListener = (event) => {
  event.target.remove();
  sumTotal(ItemList);
  saveCartItems(ItemList.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
};

ItemList.addEventListener('click', cartItemClickListener);

clearBtn.addEventListener('click', () => {
  ItemList.innerHTML = '';
  totalPrice.innerText = 0;
  saveCartItems(ItemList.innerHTML);
});

fetchProducts('computador')
  .then((products) => {
    products.results
      .forEach((element) => {
        sectionItens.appendChild(createProductItemElement(element));
      });
  });

sectionItens.addEventListener('click', (e) => {
  if (e.target.classList.contains('item__add')) {
    const productDetails = getSkuFromProductItem(e.target.parentElement);
    fetchItem(productDetails)
      .then((product) => {
        ItemList.appendChild(createCartItemElement(product));
        sumTotal(ItemList);
        saveCartItems(ItemList.innerHTML);
      });
  }
});

window.onload = () => {
  getSavedCartItems();
  sumTotal(ItemList);
};
