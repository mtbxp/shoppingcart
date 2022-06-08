const fetchProducts = async (endpoint) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;

  const products = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);

  return products;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
