const lista = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const saveItems = () => {
    const items = [];
    for (let i = 0; i < lista.children.length; i += 1) {
      items.push(lista.children[i].innerHTML);
    }
    saveCartItems(JSON.stringify(items));
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
  saveItems();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getItems = () => {
  const produtos = JSON.parse(getSavedCartItems());
  produtos.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = element;
    li.addEventListener('click', cartItemClickListener);
    lista.appendChild(li);
  });
};

const addItemCart = async () => {
  const data = await fetchProducts('computador');
  const produtos = data.results;
  const buttons = document.getElementsByClassName('item__add');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      const ids = document.getElementsByClassName('item__sku')[i].innerText;
      const { id, title, price } = produtos.find((element) => element.id === ids);
      const newLi = createCartItemElement({ sku: id, name: title, salePrice: price });
      const item = newLi.innerText;
      lista.appendChild(newLi);
      saveItems();
    });
  }
};
window.onload = async () => {
  const data = await fetchProducts('computador');
  const produtos = data.results;
  const htmlSection = document.querySelector('.items');
  produtos.forEach((element) => {
    const { id, title, thumbnail } = element;
    const section = createProductItemElement({ sku: id, name: title, image: thumbnail });
    htmlSection.appendChild(section);
  });
  await addItemCart();
  getItems();
};
