const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (product) => {
  try {
    const response = await fetch(`${endPoint}${product}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
