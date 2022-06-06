const getProductUrl = (products) => `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;

const fetchProducts = async (computador) => {
  try {
    if (computador === undefined) {
      throw new Error('You must provide an url');
    }
    const url = getProductUrl(computador);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
