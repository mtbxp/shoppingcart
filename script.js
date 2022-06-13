const sectionItems = document.querySelector('.items');
const listItems = document.querySelector('.cart__items');
const botaoLimpa = document.querySelector('.empty-cart');

const cartItemClickListener = (event) => {
  event.target.remove(event.target);
  saveCartItems(listItems.innerHTML);
  };

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// const soma = (preco) => {
//   total += preco;
//   contador.innerText = `Total: ${Math.round(total * 100) / 100}`;
// };

const buscaItem = async (element) => {
  const addItem = await fetchItem(element);
  const { id, title, price } = addItem;
  listItems.appendChild(createCartItemElement(id, title, price));
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

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const buscaLista = async () => {
  const lista = await fetchProducts('computador');
  lista.forEach((element) => sectionItems.appendChild(createProductItemElement(element)));
};

const limpaCarro = () => {
  botaoLimpa.addEventListener('click', () => {
    listItems.innerText = '';
    saveCartItems(listItems.innerHTML);
  });
};

const salvaCarrinho = () => {
  listItems.innerHTML = getSavedCartItems();
  const filhos = listItems.childNodes;
  filhos.addEventListener('click', cartItemClickListener);
};

window.onload = () => { 
  buscaLista();
  limpaCarro();
  salvaCarrinho();
};
