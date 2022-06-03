const fetchProductsUrl = (product) =>
  `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY/${product}`;

const fetchProducts = async (product) => {
  try {
    const url = fetchProductsUrl(product);
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {
    return error;
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
