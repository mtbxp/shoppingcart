const cartItems = document.querySelector('.cart__items');

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
  // if (event.target.classList.contains('cart__item')) { // gerando um condição para não ter o evento de click no elemento pai(ol).
  // }
    event.target.remove(); // remove cada item da lista ao clicar em cada classe(li) por vez.
    saveCartItems(cartItems.innerHTML);
    getSavedCartItems();
  };
  
  const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    // console.log(createCartItemElement);
    return li;
  };
  const addToCart = async (event) => { 
    const itemId = getSkuFromProductItem(event.target.parentElement);// clique capturando o sku(id) do produto, dentro da função getSku....!
    await fetchItem(itemId).then((product) => { // chamando a API_items em caso de sucesso acessar objeto results(contendo apenas dados do produto) retorna uma promise com o valor no parâmetro
      cartItems.appendChild(createCartItemElement(product)); // adicionando um elemento filho na ol(cartItems), retornando a li da função creatCart...!
      saveCartItems(cartItems.innerHTML);
});
  // console.log(itemId)
};
// btnEmptyCart.addEventListener('click', () => {
//   console.log('Clico');
// });

cartItems.addEventListener('click', cartItemClickListener);

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', (event) => {
    addToCart(event);
    saveCartItems(cartItems.innerHTML);
  });
  // console.log(createProductItemElement);
  return section;
};

const callElementsBody = async () => { // const arrow function criada para chamar e inserir os elementos da api na tela ->
  const dadItems = document.getElementsByClassName('items')[0];
  fetchProducts('computador').then((elements) => // chamando a função da api e em caso de sucesso acessar elementos ->
  elements.results.forEach((element) => // acessando o elemento(objeto results), forEach para percorrer cada elemento do results ->
  dadItems.appendChild(createProductItemElement(element)))); // acessando items pai e adicionando filho a ele pela função createP... e percorrendo os elementos que vamos trabalhar;
};

const getItemsCreate = () => {
  cartItems.innerHTML = getSavedCartItems();
};
// function emptyCart() {
//   const btnEmptyCart = document.getElementsByClassName('empty-cart')
//   .addEventListener('click', cleanCart);
// }

  window.onload = () => {
    fetchProducts('computador');
    callElementsBody();
    getItemsCreate();
    // saveCartItems();
    getSavedCartItems();
    // fetchItem();
  };
