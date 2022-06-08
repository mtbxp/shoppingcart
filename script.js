const ol = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  event.target.remove('li');
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

function addItemCart(event) {
  if (event.target.classList.contains('item__add')) {
    const getSku = getSkuFromProductItem(event.target.parentElement);
    fetchItem(getSku).then((objeto) => {
      ol.appendChild(createCartItemElement({
        sku: objeto.id,
        name: objeto.title,
        salePrice: objeto.price,
      }));
    });
  }
}

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.addEventListener('click', addItemCart);
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

window.onload = async () => {
  const [sectionItens] = document.getElementsByClassName('items');
  const items = await fetchProducts('computador');
  items.results.forEach((produto) => {
    sectionItens.appendChild(createProductItemElement({
      sku: produto.id,
      name: produto.title,
      image: produto.thumbnail,
    }));
  });
};
