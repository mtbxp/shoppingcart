const fetchProducts = (arg) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${arg}`;
  const responseData = fetch(url)
  .then((response) => response.json())
  .then((data) => data);

  return responseData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
