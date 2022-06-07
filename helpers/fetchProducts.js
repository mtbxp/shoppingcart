const fetchProducts = (argument) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${argument}`;
  const productData = fetch(url).then((response) => response.json()).then((data) => data);

  return productData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
