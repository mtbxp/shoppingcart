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

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const product = async () => {
  const items = await fetchProducts();
  const result = items.results.map((prod) => ({
    sku: prod.id,
    name: prod.title,
    image: prod.thumbnail,
  }));
  return result;
};

const productCart = async (id) => {
  const productSearch = await product();
  const [search] = productSearch.filter((element) => element.sku === id);
  const productResult = await fetchItem(search.sku);
  return ({
    sku: productResult.id,
    name: productResult.title,
    salePrice: productResult.price,
  });
};

window.onload = async () => {
  const products = await product();
  products.forEach((prod) => {
    const divItems = document.querySelector('.items');
    const section = createProductItemElement(prod);
    divItems.appendChild(section);
  });
  const card = createCartItemElement();
  productCart('MLB1983288732');
};
