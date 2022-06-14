const pricesTotais = [];
const removeTotais = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const addRemove = (salePrice) => {
  removeTotais.push(salePrice);
  return removeTotais;
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const alvo = event.target;
  console.log(alvo); // Vou deixar este console.log para informar que o valor foi corretamente removido
  alvo.remove();
};

const createCartItemElement = ({ id: sku, title: xname, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${xname} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  li.addEventListener('click', addRemove(salePrice));
  pricesTotais.push(salePrice);
  return li;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const itemContinue = async (element) => {
  const alvo = (element.target);
  const infoC = getSkuFromProductItem(alvo.parentElement);
  const infoD = await fetchItem(infoC);
  const { id, title, price } = infoD;
  const acharPai = document.querySelector('.cart__items');
  acharPai.appendChild(createCartItemElement({ id, title, price }));
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  
  if (element === 'button') e.addEventListener('click', itemContinue);
  return e;
};

const createProductItemElement = ({ id: sku, title: xname, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', xname));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const fetchContinue = async (element) => {
  // Vou colocar aqui o Id, title e tumbnail, mas primeiro separar o result
  const { results } = await fetchProducts(element);
  const acharPai = document.querySelector('.items');
  // vou criar um forEach para fazer as sections
  results.forEach(((resultado) => {
    const { id, title, thumbnail } = resultado;
    acharPai.appendChild(createProductItemElement({ id, title, thumbnail }));
  }));
};

const totalPrice = () => {
  console.log(pricesTotais);
  let soma = 0;
  for (let i = 0; i < pricesTotais.length; i += 1) {
    soma += pricesTotais[i];
  }
  console.log(soma);
  return soma;
};

const removePrice = () => {
  console.log(removePrice);
  let sub = 0;
  for (let i = 0; i < pricesTotais.length; i += 1) {
    sub += removeTotais[i];
  }
  console.log(sub);
  return sub;
};

const exibirPrice = () => {
  const sum = totalPrice;
  const minx = removePrice;
  console.log(sum - monx);
};

window.onload = () => {
  fetchContinue('computador');
};
