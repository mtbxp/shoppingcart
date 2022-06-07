const ordenadList = 'body > section > section.cart > ol';

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const calculateValueList = () => {
  const ol = document.querySelector(ordenadList);
  let totalValue = 0;
  const h2 = document.querySelector('section.cart > h2');
  ol.childNodes.forEach((item) => {
    const accNumber = parseFloat(item.innerHTML.split('|')[2].split('$')[1]);

    totalValue += accNumber;
  });
  h2.innerHTML = totalValue;
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
  saveCartItems(document.querySelector(ordenadList));

  calculateValueList();
};

const clearOrdenadList = () => {
  const ol = document.querySelector(ordenadList);
  ol.innerHTML = '';
  localStorage.clear('cartItems');

  calculateValueList();
};

const clearButton = document.querySelector('.empty-cart');
clearButton.addEventListener('click', clearOrdenadList);

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.style.margin = '30px';
  li.innerHTML = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
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

  saveCartItems(JSON.stringify(itemList.parentNode.innerHTML));

  calculateValueList();
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

window.onload = () => {
  // CHAMADA DA FUNÇÃO fetchProducts
  document.querySelector(ordenadList)
    .innerHTML = JSON.parse(getSavedCartItems());
  const response = document.querySelectorAll('body > section > section.cart > ol > li');
  response.forEach((item) => item.addEventListener('click', cartItemClickListener));

  calculateValueList();
  document.querySelector('.loading').innerText = 'carregando...';
  fetchProducts('computador')
    .then((result) => {
      document.querySelector('.loading').remove();
      result.results
      .forEach((item) => {
      const { id: sku, title: name, thumbnail: image } = item;
      createProductItemElement({ sku, name, image });
      });
    });
  // FIM CHAMADA fetchProducts
};
