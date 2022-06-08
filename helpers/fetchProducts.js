const fetchProducts = async (item) => {
  const API = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
  const url = `${API.slice(0, -6)}${item}`;
  try {
    const response = await fetch(url);
    const data = (await response.json());
    return data;
  } catch (error) {
    return error;
  }
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
