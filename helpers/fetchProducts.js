const fetchProducts = async (products) => {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
    const apiResponse = await fetch(ENDPOINT);
    const productData = await apiResponse.json();
    return productData;
  };
  
  if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}