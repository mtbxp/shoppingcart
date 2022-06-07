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
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );
  return section;
};

// busca o id do item
const getSkuFromProductItem = (item) => item.querySelector('.item__sku');

// referencia:https://www.delftstack.com/pt/howto/javascript/javascript-round-to-2-decimal-places/
// multipliquei por cem e dividi o valor do math.roud
// para retornar os centavos do valor
// filtra o valor e devolve ele somado 
const removePrice = (price) => {
  const itensRemove = total.filter((value) => value === price);
  if (itensRemove.length > 1) {
    const results = total.reduce((_acc, _value) => {
      const itensfiltrado = total.filter((value) => value !== price);
      for (let index = 0; index < itensRemove.length - 1; index += 1) {
        itensfiltrado.push(itensRemove[0]);
      }
      return itensfiltrado;
    });
    total = results;
    const totalPrice = total.reduce((acc, value) => acc + value, 0);
        return Math.round(totalPrice * 100) / 100;
    } 
        const filtro = total.filter((value) => value !== price);
        total = filtro;
        const totalPrice = total.reduce((acc, value) => acc + value, 0);
        // console.log(total, 'removePrice', totalPrice);
        return Math.round(totalPrice * 100) / 100;
};

// retorna o valor total
const returnSpam = () => document.querySelector('.total-price');

// renderiza o total do produto
const renderRemovePrice = (price) => {
  const valor = removePrice(price);
  const spam = returnSpam();
  // renderizar price
  spam.innerText = `${valor}`;
  // console.log('renderRemove', valor, spam);
};

// filtra se mais de um item for identificado
const filtroRemovedor = (rmId) => {
  const storage = JSON.parse(localStorage.getItem('cartItems'));
  const itensRemove = storage.filter((id) => id === rmId);
  if (itensRemove.length > 1) {
    const results = storage.reduce((_acc, _value) => {
      const itensfiltrado = storage.filter((id) => id !== rmId);
      for (let index = 0; index < itensRemove.length - 1; index += 1) {
        itensfiltrado.push(itensRemove[0]);
      }
      return itensfiltrado;
    });
    localStorage.setItem('cartItems', JSON.stringify(results));
    // console.log('deu certo', results);
  } else {
    const itens = storage.filter((id) => id !== rmId);
    localStorage.setItem('cartItems', JSON.stringify(itens));
    // console.log('1');
  }
};

// referencia:https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
// utilizei de remoceChild para remover o elemento do seu proprio
const cartItemClickListener = (li, rmId, price) => {
  li.addEventListener('click', (_event) => {
    // ...
    if (li.parentNode) {
      li.parentNode.removeChild(li);
    }
    // removendo do localstorage
    filtroRemovedor(rmId);
    renderRemovePrice(price);
  });
  // console.log(rmId, 'delet', li);
};
// remover valor do total price

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
  const valorArredondado = Math.round(totalPrice * 100) / 100;
  return valorArredondado;
};
// renderiza o total do produto
const renderTotalPrice = (price) => {
  const valor = somaPrice(price);
  const spam = returnSpam();
  // se o spam ainda nao existir criar
  if (!spam) {
    const createSpam = document.createElement('spam');
    createSpam.innerText = `${valor}`;
    createSpam.className = 'total-price';
    const section = document.querySelector('.cart');
    section.appendChild(createSpam);
  } else {
    spam.innerText = `${valor}`;
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
  if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', JSON.stringify([id]));
  } else {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const results = [...storage, id];
    saveCartItems(results);
    // console.log('add', results);
  }
};

// const carregando = (clas) => {
//   const section = document.querySelector(clas);
//   const carregamento = document.createElement('spam');
//   carregamento.innerText = 'carregando...';
//   carregamento.className = 'loading';
//   section.appendChild(carregamento);
// };

// renderiza produtos na tela principal
const renderProductItemElement = async () => {
  // carregando('.items');
  // chamo a section
  const sectionProducts = document.querySelector('.items');
  // chamo produtos
  const products = await SearchProducts();
    // renderizo cada item na tela
    products.map((product) => {
      // crio o card
      const cardProducts = createProductItemElement(product);
      // add evento
      cardProducts.addEventListener('click', addShopCard);
      // renderizo
      return sectionProducts.appendChild(cardProducts);
    });
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
  const spam = returnSpam();
  spam.innerText = `${total}`;
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
  const storageTratado = JSON.parse(storage);
  // renderiza
  storageTratado.map((id) => renderCartItemElement(id));
  // console.log('renderStorage', storage);
};

window.onload = () => {
  // localStorage.setItem('cartItems', JSON.stringify([]));
  renderLocalStorage();
  renderProductItemElement();
};
