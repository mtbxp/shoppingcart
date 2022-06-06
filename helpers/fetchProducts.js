const fetchProducts = async (param) => {
  // seu código aqui
 if (!param || param.length === 0) {
  return new Error('You must provide an url');
 }

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const receiveProducts = await fetch(url)
    .then((received) => received.json())
    .then((result) => result);
    return receiveProducts;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
