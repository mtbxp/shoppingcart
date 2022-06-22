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

const createProductItemElement = async ({
  id: sku,
  title: name,
  thumbnail: image,
}) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

async function godProducts() {
  try {
    const product = await fetchProducts('computador');
    product.results.forEach(async (element) => {
      const values = await createProductItemElement(element);
      document.querySelector('.items').appendChild(values);
    });
  } catch (error) {
    return new Error('AHAAAAA');
  }
}

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const remove = event.target;
  remove.parentNode.removeChild(remove);
  };

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function godItems() {
  const buttonAddItem = document.querySelector('.items');
  buttonAddItem.addEventListener('click', async (event) => {
    if (event.target.classList.contains('item__add')) {
      const getSku = getSkuFromProductItem(event.target.parentNode);
      const resultItems = await fetchItem(getSku);
      const selectedItem = createCartItemElement(resultItems);
      document.querySelector('.cart__items').appendChild(selectedItem);
    }
  });
}

window.onload = () => {
  godProducts();
  godItems();
  cartItemClickListener();
};
