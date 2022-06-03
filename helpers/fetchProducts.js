const fetchProducts = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
console.log(fetchProducts());
console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
