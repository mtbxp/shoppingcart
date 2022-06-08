const fetchProducts = async (item) => {
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
