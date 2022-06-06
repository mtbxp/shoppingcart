const fetchProducts = async (entry) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${entry}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
// console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
