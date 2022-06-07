const fetchProducts = async (arg) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${arg}`;
  const responseData = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.results)
  .catch((error) => error);
  return responseData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
