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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => { // req 5
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => { // req4
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Durante a realização do requisito 4, recebi orientações dos colegas Willian Portela, 
// João Mattedi, Maria Clara Reis e Emily Menezes.

async function appendFetchItems(idQualquer) { // req4
  const element1 = await fetchItem(idQualquer);
  const { id: sku, title: name, price: salePrice } = element1;
  const resultado = createCartItemElement({ sku, name, salePrice });
  const ol = document.getElementsByClassName('cart__items')[0];
  ol.appendChild(resultado);
}

function addBotao() { // req4
  const listButton = document.querySelectorAll('.item__add');
  listButton.forEach((botao) => botao.addEventListener('click', (event) => {
    const eventoBotao = event.target.parentNode.firstChild.innerText;
    appendFetchItems(eventoBotao);
  }));
}

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
  addBotao();
}

window.onload = () => { appendFetchProducts(); };
