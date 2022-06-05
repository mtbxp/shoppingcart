let total = [0];
/* eslint-disable sonarjs/no-duplicate-string */
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

// cria o card do item
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

// busca o id do item
const getSkuFromProductItem = (item) => item.querySelector('.item__sku');

const removePrice = (price) => {
  const filtro = total.filter((value) => value !== price);
  total = filtro;
  const totalPrice = total.reduce((acc, value) => acc + value, 0);
  const valorArredondado = Math.round(totalPrice);
  console.log(total, 'removePrice', totalPrice);
  return valorArredondado;
};
// renderiza o total do produto
const renderRemovePrice = (price) => {
  const valor = removePrice(price);
  const spam = document.querySelector('.total-price');  
  // renderizar price
  spam.innerText = `valor total:$${valor}`;
  console.log('renderRemove', valor);
};

// remove o item do shopcard
const cartItemClickListener = (li, rmId, price) => {
  li.addEventListener('click', ({ target }) => {
    // ...
    const naoEtarget = target;
    naoEtarget.innerHTML = '';
    // removendo do localstorage
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const filtro = storage.filter((id) => id !== rmId);
    saveCartItems(filtro);
    console.log(rmId, 'delet', filtro);
    // remover valor do total price
    renderRemovePrice(price);
  });
};

// cria card para shopcart
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  cartItemClickListener(li, id, price);
  return li;
};
// functions adicionais

// fecth nos produtos
const SearchProducts = async () => {
  // chama
  const produtos = await fetchProducts('computador');
  // destroi
  const { results } = produtos;
  return results;
};

// fetch nos detalhes do produto
const SearchItems = async (id) => {
  // chama
  const items = await fetchItem(id);
  return items;
};

// soma o total do produto
const somaPrice = (price) => {
  total.push(price);
  const totalPrice = total.reduce((acc, value) => acc + value, 0);
  const valorArredondado = Math.round(totalPrice);
  return valorArredondado;
};
// renderiza o total do produto
const renderTotalPrice = (price) => {
  const valor = somaPrice(price);
  const spam = document.querySelector('.total-price');  
  // se o spam ainda nao existir criar
  if (!spam) {
    const createSpam = document.createElement('spam');
    createSpam.innerText = `valor total:$${valor}`;
    createSpam.className = 'total-price';
  const section = document.querySelector('.cart'); 
  section.appendChild(createSpam);
  } else {
  spam.innerText = `valor total:$${valor}`;
  }
};

// renderiza produtos no shopcard
const renderCartItemElement = async (id) => {
  // cria os elementos 
  const item = await SearchItems(id);
  const createCard = createCartItemElement(item);
  // chama a section
  const sectionItems = document.querySelector('.cart__items');
  // adicia o elemento
  sectionItems.appendChild(createCard);
  // altera a soma dos elementos
  renderTotalPrice(item.price);
  // console.log('render', item.price);
};

// adiciona produtos ao shopcard
const addShopCard = ({ path }) => {
  // pega o id do prduto
  const id = getSkuFromProductItem(path[1]).innerText;
  // renderiza no carrinho
  renderCartItemElement(id);
  // armazena no local storage
  saveCartItems(id);
  // console.log('add', id);
};
// renderiza produtos na tela principal
// chamo a section
// chamo produtos
// renderizar por um tempo antes de renderiza a pagina um texto de lold
// renderizo cada item na tela
// crio o card
// add evento
// renderizo

const renderProductItemElement = async () => {
  const sectionProducts = document.querySelector('.items');
  const products = await SearchProducts();
  const carregamento = document.createElement('spam');
  carregamento.innerText = 'carregando...';
  carregamento.className = 'loading';
  sectionProducts.appendChild(carregamento);
  setTimeout(() => {
    const elemento = document.querySelector('.loading');
    elemento.innerHTML = '';
    products.map((product) => {
      const cardProducts = createProductItemElement(product);
      cardProducts.addEventListener('click', addShopCard);
      return sectionProducts.appendChild(cardProducts);
    });
  }, 1000);
};

/*
referencia:https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
referencia2:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
utilizer while que cria um laco de repetiçao ate q a validaçao seja falsa
*/
// button esvaziar carrinho
  const buttonClear = document.querySelector('.empty-cart');
  buttonClear.addEventListener('click', () => {
    // limpar o total
    total = [0];
  const spam = document.querySelector('.total-price');  
  spam.innerText = `valor total:$${total}`;
    // limpar o local localStorage
    localStorage.clear();
    // limpar o carrinho de compras
    const sectionItems = document.querySelector('.cart__items');
    while (sectionItems.firstChild) {
      sectionItems.removeChild(sectionItems.firstChild);
    }
    // console.log('clear');
  });
  
  // renderiza localstorage
  renderLocalStorage = async () => {
    // chama os ids
    const storage = getSavedCartItems();
    // renderiza
    storage.map((id) => renderCartItemElement(id));
    // console.log('renderStorage', storage);
  };

window.onload = () => {
  renderLocalStorage();
  renderProductItemElement();
};