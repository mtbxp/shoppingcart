const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const clique = event; 
  clique.target.innerText = '';
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const buscaItem = async (item) => {
  const it = await fetchItem(item);
  console.log(it);
    const objItem = {
      sku: it.id,
      name: it.title,
      salePrice: it.price,
        };
    return objItem;
    };

    let produt;
    let y;
const capBtn = document.getElementsByClassName('items')[0];
    capBtn.addEventListener('click', async (event) => {
      produt = event.target.parentNode.firstChild.innerText; 
      y = await buscaItem(`${produt}`);
      const aaa = document.getElementsByClassName('cart__items')[0];
      const bbb = createCartItemElement(y);
      aaa.appendChild(bbb);
    });

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

const insereLista = async () => {
  const itens = await fetchProducts('computador');
  itens.forEach(({ id, title, thumbnail }) => {
    const obj = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    const inner = createProductItemElement(obj);
    document.getElementsByClassName('items')[0].appendChild(inner);
  });
};

window.onload = () => {
  insereLista();
};
