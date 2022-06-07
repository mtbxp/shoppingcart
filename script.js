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

  return section;
};

// eslint-disable-next-line no-unused-vars
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// eslint-disable-next-line no-unused-vars
const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

// eslint-disable-next-line no-unused-vars
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// const renderProduct = async () => {
//   const computadorProduct = document.querySelector('.items');
//   try {
//   const product = await fetchProducts('computador');
//   product.results.forEach((element) => {
//     const productCard = createCustomElement(element);
//     computadorProduct.appendChild(productCard);
//   });
//   } catch (error) {
//     computadorProduct.innerHTML = `<h2>${error}</h2>`;
//   }
// };

const renderImg = async () => {
  const computadorProduct = document.querySelector('.items');
  const product = await fetchProducts('computador');
  try {
  product.results.forEach((item) => {
    const objProduct = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const listProduct = createProductItemElement(objProduct);
    computadorProduct.appendChild(listProduct);
  });
  } catch (error) {
    computadorProduct.innerHTML = `<h2>${error}</h2>`;
  }
};

window.onload = () => {
  // renderProduct();
  renderImg();
};