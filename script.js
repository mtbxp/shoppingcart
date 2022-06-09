
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
  const CPIE = document.querySelector('.items');
  return CPIE.appendChild(section);
};

const cart = document.querySelector('.cart__items');
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (e) => {
e.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const cartItem = cart.appendChild(li);
  saveCartItems(cartItem.innerHTML);
  return cartItem;
};

const limparCarrinho = () => {
  const emptyCart = document.querySelector('.empty-cart');
  emptyCart.addEventListener('click', () => { cart.innerHTML = ''; });
};

const nova = async () => {
  const FP = await fetchProducts('computador');
  FP.forEach(({ id, title, thumbnail }) => createProductItemElement({
    sku: id,
    name: title,
    image: thumbnail,
  }).addEventListener('click', async () => {
    const itemASerAdicionados = await fetchItem(id);
    const algumaCoisa = {
      sku: itemASerAdicionados.id,
      name: itemASerAdicionados.title,
      salePrice: itemASerAdicionados.price,
    };
    createCartItemElement(algumaCoisa);
  }));
  document.querySelector('.loading').remove();
};
const maisNova = () => {
  const vari = getSavedCartItems();
  console.log(vari);
};

const loading = () => {
  const containerVnka = document.querySelector('.container');
  containerVnka.appendChild(createCustomElement('span', 'loading', 'carregando...'));
};

window.onload = () => {
  loading();
  nova();
  limparCarrinho();
  maisNova();
};
