const fetchProducts = async (param) => { 
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  try {
    const result = await fetch(API_URL);
    const data = await result.json();
    return data.results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
