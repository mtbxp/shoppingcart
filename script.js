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

const cartItemClickListener = (event) => {
  // REMOVER O PRODUTO DO CARRINHO!
  const remove = event.target;
  remove.parentNode.removeChild(remove);
  saveCartItems(document.querySelector('body > section > section.cart > ol'));
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.style.margin = '30px';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  
  return li;
};

const readerProductChoosed = async (element) => {
  const id = element
    .target.parentNode
    .querySelector('.item__sku')
    .textContent;

  const response = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = response;
  const itemList = createCartItemElement({ sku, name, salePrice });
  document.querySelector('.cart__items').appendChild(itemList);

  saveCartItems(itemList.parentNode);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  const button = section.querySelector('button');

  button.addEventListener('click', readerProductChoosed);

  document.querySelector('.items').appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => {
  // CHAMADA DA FUNÇÃO fetchProducts
  document.querySelector('body > section > section.cart > ol')
    .innerHTML = JSON.parse(getSavedCartItems());
  
  const response = document.querySelectorAll('body > section > section.cart > ol > li');

  response.forEach((item) => item.addEventListener('click', cartItemClickListener));
    // .addEventListener('click', cartItemClickListener);

  fetchProducts('computador')
    .then((result) => result
      .results
      .forEach((item) => {
      const { id: sku, title: name, thumbnail: image } = item;
      createProductItemElement({ sku, name, image });
      }));
  // FIM CHAMADA fetchProducts
};
