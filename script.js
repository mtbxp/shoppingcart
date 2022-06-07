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
    document.getElementsByClassName('items')[0].appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = async () => {
const fetchNewItem = await fetchItem('MLB1615760527');
fetchNewItem.forEach((element) => {
const newObj = {
  sku: element.id,
  name: element.title,
  salePrice: element.price,
};
return console.log(newObj);
});
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const newfunction = async () => {
  const newItens = await fetchProducts('computador');
newItens.forEach((element) => {
  const obj = {
    sku: element.id,
    name: element.title,
    image: element.thumbnail,
  };
  return createProductItemElement(obj);
});
};

window.onload = () => {
  newfunction();
  cartItemClickListener();
 };
