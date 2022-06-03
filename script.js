const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  event.target.parentNode.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const componentePai = document.querySelector('.cart__items');
  componentePai.appendChild(li);
  return li;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getProduct = (id) => fetchItem(id).then((produto) => {
  const baseObj = {
    sku: produto.id,
    name: produto.title,
    preco: produto.price,
  };
  createCartItemElement(baseObj);
});

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.children[3].addEventListener('click', (event) => {
    const father = event.target.parentNode;
    const childrenValue = father.children[0].innerText;
    getProduct(childrenValue);
  });
  const componentPai = document.querySelector('.items');
  componentPai.appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

fetchProducts('computador').then((item) => {
  item.forEach((produto) => {
    const objBase = {
      sku: produto.id,
      name: produto.title,
      image: produto.thumbnail,
    };
    createProductItemElement(objBase);
  });
});

window.onload = () => { };
