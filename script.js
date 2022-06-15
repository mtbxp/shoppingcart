// Constantes utilizadas nas funções.
const getClassCartItems = '.cart__items';
const getClassItems = document.querySelector('.items');
const getElement = document.querySelector(getClassCartItems);
const button = document.querySelector('.empty-cart');
const getListOl = document.querySelector('ol');

// Função que calcula o valor total do carrinho
const getValue = () => {
  const flag = 0;
  const message = ' PRICE: $';
  const getCartItem = document.querySelectorAll('.cart__item');
  const finishing = document.querySelector('.total-price');
  const value = [];
  let amount;
  getCartItem.forEach((element) => {
    amount = element.textContent.split(message, flag + 2)[flag + 1];
    value.push(Number(amount));
  });
  const getPrice = value.reduce((i, index) => i + index, flag);
  const total = Math.round(getPrice * 100) / 100;
  finishing.textContent = total;
};

// Função que adiciona a mensagem carregando
const addMessageLoading = () => {
    const addMessage = document.createElement('aside');
    addMessage.innerHTML = 'carregando...';
    addMessage.classList.add('loading');
    getClassItems.appendChild(addMessage);
};

// Função que limpa as li, evento que apaga um item
const cartItemClickListener = (event) => {
  event.target.closest('li').remove();
  const getElementOl = document.querySelector(getClassCartItems).innerHTML;
  saveCartItems(getElementOl);
   getValue();
};

// Essa função é responsável por criar a imagem que é exibida
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

// Essa função é responsável por criar a descrição do produto que é exibido 
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// Essa função é responsável por criar/montar o que será exibido
const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// função que descreve o item com imagem e texto no carrinho de compras
const createCartItemElement = ({ id: sku, title: name, price: salePrice, thumbnail }) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const paragrafo = document.createElement('p');
  li.className = 'cart__item';
  img.src = thumbnail;
  li.append(img);
  paragrafo.textContent = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.append(paragrafo);
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Função que adiciona item no carrinho
const eventItems = () => {
  const addResponse = (flag) => {
    const elementCart = createCartItemElement(flag);
    elementCart.addEventListener('click', cartItemClickListener);
    getElement.appendChild(elementCart);
  };
  getClassItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('item__add')) {
      const getCode = getSkuFromProductItem(e.target.parentNode);
      fetchItem(getCode).then((dados) => {
        addResponse(dados);
        const getTagOl = document.querySelector(getClassCartItems).innerHTML;
        saveCartItems(getTagOl);
         getValue();
      });  
    }
  });
};

// Função que chama a API com os produtos e remove a mensagem "carregando"
const createListProducts = async () => {
  const getClassLoading = document.querySelector('.loading');
  const getItems = await fetchProducts('computador');
  getClassLoading.remove();
  getItems.forEach((flag) => {
    const setItems = createProductItemElement(flag);
    getClassItems.appendChild(setItems);
  });
};

// Função que adiciona itens no local Storage
const addLocalStorage = () => {
  getListOl.innerHTML = getSavedCartItems();
  const getLi = document.querySelectorAll('li');
  getLi.forEach((flag) => flag.addEventListener('click', cartItemClickListener));
   getValue();
};

// Função que adiciona evento ao botão de esvaziar o carrinho e limpar o local storage
button.addEventListener('click', () => {
    localStorage.clear();
    getListOl.innerHTML = '';
    getValue(); 
});

window.onload = () => { 
  addMessageLoading(); 
  createListProducts(); 
  eventItems(); 
  addLocalStorage();
};