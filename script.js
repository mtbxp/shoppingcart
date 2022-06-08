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

async function appendFetchProducts() {
  const result = await fetchProducts('computador');
  const productsList = result.results.map(function (p) {
    return {
      sku: p.id,
      name: p.title, 
      image: p.thumbnail,
    };
  }); 
  productsList.forEach((product) => {
    const resultSection = createProductItemElement(product);
    const sectionsElement = document.getElementsByClassName('items')[0];
    sectionsElement.appendChild(resultSection);
  }); 
 }

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => { // req 5
  // coloque seu código aqui
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => { // req4
  const li = document.createElement('li');
  // const element = document.createElement('p');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Durante a realização dos requisitos 4 e 5, obtive orientações da colega Emily Menezes

// function appendFetchItems(idQualquer) { // req4
//   const resultado = createCartItemElement(idQualquer);
//   resultado.addEventListener('click', cartItemClickListener);
//   const ol = document.getElementsByClassName('cart__items');
//   ol.appendChild(resultado);
// }
// function addProducts() { // req4
//   const classItem = document.getElementsByClassName('items');
//   classItem.addEventListener('click', (element) => { 
//     if (element.target.classList.contains('item__add')) {
//       const getId = getSkuFromProductItem(element.target.parentNode);
//       fetchItem(getId).then((index) => { 
//       appendFetchItems(index);
//   // const ol1 = document.getElementsByClassName('cart__items').innerHTML; 
//  });
//     } 
// });
// }
window.onload = () => { appendFetchProducts(); };
// addProducts();
