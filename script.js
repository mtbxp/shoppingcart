const resultsComputador = async () => {
  const mostraCertinho = await fetchProducts('computador');
  return mostraCertinho;  
};

const classItems = document.querySelector('.items');
const classCartItems = document.querySelector('.cart__items');
const botaoEsvaziar = document.querySelector('.empty-cart');

botaoEsvaziar.addEventListener('click', () => {
  const filhos = classCartItems.children;
  if (filhos.length !== 0) {
    for (index = filhos.length - 1; index >= 0; index -= 1) {
      classCartItems.removeChild(filhos[index]);
    }
  }
});

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  const itemClicado = event.target;
  classCartItems.removeChild(itemClicado);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const colocarNoCarrinho = async (event) => {
  const idCerto = event.target.parentElement.firstChild.innerHTML;
  const constF = await fetchItem(idCerto);
  classCartItems.appendChild(
  createCartItemElement({ sku: constF.id, name: constF.title, salePrice: constF.price }),
  );
  saveCartItems(classCartItems.innerHTML);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((element) => {
    element.addEventListener('click', colocarNoCarrinho);
  });
  return section;
};

const arrayCertadeProdutos = async () => { 
  const teste = await resultsComputador();
  teste.forEach((element) => {
    classItems.appendChild(
      createProductItemElement({ sku: element.id, name: element.title, image: element.thumbnail }),
      );
  });
};

// const startCarrinho = () => {
//   if (localStorage.length === 0) {
//     const coloqueItems = document.createElement('li');
//     coloqueItems.innerText = 'Coloque seus itens aqui !';
//     classCartItems.appendChild(coloqueItems);
//   }
//   const itensDoLocal = document.createElement('li');
//   itensDoLocal.innerHTML = JSON.parse(getSavedCartItems());
//   console.log(itensDoLocal);
//   classCartItems.appendChild(itensDoLocal);
// };

window.onload = () => { 
  arrayCertadeProdutos();
  // startCarrinho();
};
