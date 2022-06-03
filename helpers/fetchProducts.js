const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
const fetchProducts = async (product) => {
  try {
    const response = await fetch(`${endPoint}${product}`);
    const responseJson = await response.json();
    const results = await responseJson.results;
    return results;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
