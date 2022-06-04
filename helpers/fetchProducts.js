const fetchProducts = async (param) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const resultado = await fetch(endpoint)
   .then((response) => response.json())
   .then((obj) => obj)
   .catch((error) => error);

  return resultado;
};

const creatList = async () => {
  const obj = await fetchProducts('computador');
  const section = document.getElementsByClassName('items');
  return obj.results.map((item) => {
    const { id, title, thumbnail } = item
    const obj2 = { sku: id, name: title, image: thumbnail };
    return section.appendChild(createProductItemElement(obj2))
  });
};
creatList()

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

window.onload = () => creatList();