const kartIdentifier = document.querySelector('.cart__items');

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

const cartItemClickListener = () => {
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function idIdentifier(event) {
  const pressedComputer = event.target.parentNode.firstChild.innerText;
  const wantedComputer = await fetchItem(pressedComputer);
  const infosForKart = createCartItemElement(wantedComputer);
  return kartIdentifier.appendChild(infosForKart);
}

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', idIdentifier);

  return section;
};

const computersAvaible = async () => {
  const arrayComputers = await fetchProducts('computer');
  const wantedHTMLelement = document.querySelector('.items');
  arrayComputers.results.forEach((eachComputer) => {
    const append = createProductItemElement(eachComputer);
    wantedHTMLelement.appendChild(append);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const removeItemByClick = () => {
};

window.onload = () => {
 computersAvaible(); 
};
