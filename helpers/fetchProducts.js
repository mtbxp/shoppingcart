const fetchProducts = (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
