const fetchProducts = async (categoria) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`;
  const getElement = await fetch(url).then((response) => response.json())
  .then((date) => date.results)
  .catch((error) => error);
  return getElement;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
