const fetchProducts = (argument) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${argument}`;
  const responseData = fetch(url).then((response) => response.json()).then((data) => data);

  return responseData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
