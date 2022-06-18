const sectionItems = document.querySelector('.items');
const listItems = document.querySelector('.cart__items');
const botaoLimpa = document.querySelector('.empty-cart');
const total = document.querySelector('.total-price');
let result = 0;

const showTotal = (resultado) => {
  total.innerText = `TOTAL: ${Math.round(resultado * 100) / 100}`;
  localStorage.setItem('totalPrice', total.innerText);
};

const soma = (param) => {
  result += param;
  showTotal(result);
};

const subtracao = (param) => {
  result -= param;
  showTotal(result);
};

const cartItemClickListener = (event) => {
  event.target.remove(event.target);
  const buscaPreco = event.target.innerText.split(' ');
  const preco = buscaPreco[buscaPreco.length - 1].split('');
  preco.splice(0, 1);
  const precoFinal = parseFloat(preco.join(''));
  subtracao(precoFinal);
  
  saveCartItems(listItems.innerHTML);
  };

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const buscaItem = async (element) => {
  const addItem = await fetchItem(element);
  const { id, title, price } = addItem;
  listItems.appendChild(createCartItemElement(id, title, price));
  soma(price);
  saveCartItems(listItems.innerHTML);
  };

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
  if (element === 'button') {
    e.addEventListener('click', (event) => {
      const item = event.target.parentElement.firstChild.innerHTML;
      buscaItem(item);
    });
    return e;
  }
  
  return e;
};

const createProductItemElement = ({ 
  id: sku, 
  title: name, 
  thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const buscaLista = async () => {
  const lista = await fetchProducts('computador');
  lista.forEach((element) => sectionItems.appendChild(createProductItemElement(element)));
};

const limpaCarro = () => {
  botaoLimpa.addEventListener('click', () => { 
    listItems.innerHTML = '';
    saveCartItems(listItems.innerHTML);
    result = 0;
    showTotal(result);
  });
};

const buscaCarrinho = () => {
  listItems.innerHTML = getSavedCartItems();
  const filhos = listItems.childNodes;
  if (filhos.length !== 0) {
  filhos.forEach((element) => element.addEventListener('click', cartItemClickListener));
  }
  if (localStorage.getItem('totalPrice')) {
    const precoTotal = localStorage.getItem('totalPrice');
  const array = precoTotal.split(' ');
  const precoGuardado = array.splice(1, 1);
  result = parseFloat(precoGuardado);
  showTotal(result);
  }
};

window.onload = () => { 
  buscaLista();
  limpaCarro();
  buscaCarrinho();
};
