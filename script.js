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

const limparCarrinho = () => {
  document.querySelectorAll('li.cart__item').forEach((e) => e.remove());
  saveCartItems('[]');
};

function pegaItemsDoCarrinho() {
  let arrayItemsSave = getSavedCartItems('cartItems');
  if (arrayItemsSave) {
    arrayItemsSave = JSON.parse(arrayItemsSave);
  } else {
    arrayItemsSave = [];
  }
  return arrayItemsSave;
}
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  const removeItem = (event) => {
    cartItemClickListener(event);

    const itemsDoCarrinho = pegaItemsDoCarrinho();
    const filtraItems = (itemCarrinho) => itemCarrinho.id !== sku;
    saveCartItems(JSON.stringify(itemsDoCarrinho.filter(filtraItems)));
  };
  li.addEventListener('click', removeItem);
  return li;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

function SaveCar(item) {
  const arrayItemsSave = pegaItemsDoCarrinho();
  arrayItemsSave.push(item);
  saveCartItems(JSON.stringify(arrayItemsSave));
}

function addItemOnView(objeto) {
  ol.appendChild(createCartItemElement({
    sku: objeto.id,
    name: objeto.title,
    salePrice: objeto.price,
  }));
}
function addItemCart(event) {
  if (event.target.classList.contains('item__add')) {
    const getSku = getSkuFromProductItem(event.target.parentElement);
    fetchItem(getSku).then((objeto) => {
      SaveCar(objeto);
      addItemOnView(objeto);
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
  const botaoEsvaziar = document.querySelector('.empty-cart');
  botaoEsvaziar.addEventListener('click', limparCarrinho);

  if (getSavedCartItems('cartItems')) {
    const arraItems = pegaItemsDoCarrinho();
    arraItems.forEach(addItemOnView);
  }

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
