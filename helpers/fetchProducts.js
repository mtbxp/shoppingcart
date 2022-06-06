const fetchProducts = async (computador) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
