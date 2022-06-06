const cartItems = document.querySelector('.cart__items');
const btnAdd = document.getElementsByClassName('item_add'); // chamando a classe item add botão adicionar
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
// console.log(getSkuFromProductItem);

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  // console.log(imageSource);
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  // console.log(element);
  return e;
};
const cartItemClickListener = (event) => {
  // if (event.target)
    cartItems.removeChild(event.target);
  };

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  // console.log(createCartItemElement);
  return li;
};
const addToCart = (event) => { 
  const itemId = getSkuFromProductItem(event.target.parentElement);
  fetchItem(itemId).then((product) => {
    cartItems.appendChild(createCartItemElement(product));
});
  // console.log(itemId)
};

cartItems.addEventListener('click', cartItemClickListener);

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', addToCart);
  // console.log(createProductItemElement);
  return section;
};
// console.log(cartItems);

const callElementsBody = async () => { // const arrow function criada para chamar e inserir os elementos da api na tela ->
  const dadItems = document.getElementsByClassName('items')[0];
  fetchProducts('computador').then((elements) => // chamando a função da api e em caso de sucesso acessar elementos ->
    elements.results.forEach((element) => // acessando o elemento(objeto results), forEach para percorrer cada elemento do results ->
    dadItems.appendChild(createProductItemElement(element)))); // acessando items pai e adicionando filho a ele pela função createP... e percorrendo os elementos que vamos trabalhar;
};

window.onload = () => {
  fetchProducts('computador');
  callElementsBody();
  // fetchItem();
};
