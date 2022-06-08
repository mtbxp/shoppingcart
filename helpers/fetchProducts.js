const fetchProducts = async (QUERY) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const result = await fetch(endpoint);
    const data = await result.json();
    return data.results;    
  } catch (error) {
    throw new Error(error);   
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
