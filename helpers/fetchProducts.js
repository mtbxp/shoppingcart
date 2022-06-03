const fetchProducts = async (productsType) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productsType}`;
    const apiResponse = await fetch(url);
    const productsData = await apiResponse.json();
    return productsData;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
