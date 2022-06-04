const cartItems = document.querySelector('.cart__items');

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
  const buttom = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttom.setAttribute('data-sku', sku);
  section.appendChild(buttom);

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// const cartItemClickListener = (event) => {
//   // coloque seu código aqui
// };

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
};

const appendProducts = (productList) => {
  const sectionItems = document.querySelector('.items');
  productList.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    const section = createProductItemElement({ sku, name, image });
    sectionItems.append(section);
  });
};

const addItemToCart = (element, sku) => {
  element.addEventListener('click', async () => {
    const { title: name, price: salePrice } = await fetchItem(sku);

    const li = createCartItemElement({ sku, name, salePrice });
    console.log(li);
    // trabalhar aqui localStorage ???
    // verificar se já existe o produto, add, remover 
    cartItems.append(li);
  });
};

window.onload = async () => { 
  const data = await fetchProducts('computador').then((response) => response);
  const { results: productList } = data;

  appendProducts(productList);

  // referencia sobre Data Attributes : https://www.youtube.com/watch?v=ri-xkk9PuDU
  const buttonsAddCart = document.querySelectorAll('[data-sku]');
  buttonsAddCart.forEach((buttonAddCart) => {
    const { sku } = buttonAddCart.dataset;
    addItemToCart(buttonAddCart, sku);
  });
};
