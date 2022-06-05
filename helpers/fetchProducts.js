const fetchProducts = (computer) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computer}`;

  const result = fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
