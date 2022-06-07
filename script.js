const lista = document.querySelector('.cart__items');
const totalPrice = document.createElement('p');
totalPrice.classList.add('total-price');
totalPrice.innerText = '$0';
const secaoCarrinho = document.querySelector('.cart');
secaoCarrinho.appendChild(totalPrice);

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartPrice = async () => {
  const data = await fetchProducts('computador');
  const produtos = data.results;
  let soma = 0;
  const id = [];
  for (let i = 0; i < lista.children.length; i += 1) {
    id.push(lista.children[i].innerText.split(' ')[1]);
  }
  id.forEach((element) => {
    const preco = produtos.find((element2) => element2.id === element).price;
    soma += preco;
  });
  totalPrice.innerText = `$${soma.toFixed(2)}`;
  localStorage.setItem('price', JSON.stringify(soma));
};

const setPrice = () => {
  const price = JSON.parse(localStorage.getItem('price'));
  totalPrice.innerHTML = `$${price.toFixed(2)}`;
};

const saveItems = () => {
    const items = [];
    for (let i = 0; i < lista.children.length; i += 1) {
      items.push(lista.children[i].innerHTML);
    }
    saveCartItems(JSON.stringify(items));
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

const limparCarrinho = () => {
  const button = document.getElementsByClassName('empty-cart')[0];
  button.addEventListener('click', () => {
    const temp = lista.children.length;
    for (let i = 0; i < temp; i += 1) {
      lista.lastChild.remove();
    }
    cartPrice();
    localStorage.clear('cartItems');
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveItems();
  cartPrice();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getItems = () => {
  if (JSON.parse(getSavedCartItems()) !== null) {
  const produtos = JSON.parse(getSavedCartItems());
  for (let i = 0; i < produtos.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = produtos[i];
    li.addEventListener('click', cartItemClickListener);
    lista.appendChild(li);
  }
}
};

const addItemCart = async () => {
  const data = await fetchProducts('computador');
  const produtos = data.results;
  const buttons = document.getElementsByClassName('item__add');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      const ids = document.getElementsByClassName('item__sku')[i].innerText;
      const { id, title, price } = produtos.find((element) => element.id === ids);
      const newLi = createCartItemElement({ sku: id, name: title, salePrice: price });
      const item = newLi.innerText;
      lista.appendChild(newLi);
      saveItems();
      cartPrice();
    });
  }
};
const loadingScreen = () => {
  const newDiv = document.createElement('div');
  newDiv.id = 'carregando';
  console.log(newDiv);
  newDiv.innerHTML = 'carregando...';
  const secao = document.getElementsByClassName('items')[0];
  console.log(secao);
  secao.appendChild(newDiv);
};

window.onload = async () => {
  loadingScreen();
  const data = await fetchProducts('computador');
  const produtos = data.results;
  const htmlSection = document.querySelector('.items');
  document.getElementById('carregando').remove();
  produtos.forEach((element) => {
    const { id, title, thumbnail } = element;
    const section = createProductItemElement({ sku: id, name: title, image: thumbnail });
    htmlSection.appendChild(section);
  });
  await addItemCart();
  getItems();
  setPrice();
};

limparCarrinho();
