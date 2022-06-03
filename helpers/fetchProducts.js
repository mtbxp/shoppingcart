const fetchProducts = async (item) => {
  // seu código aqui
  try {
    const getUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const response = await fetch(getUrl);
  const obj = await response.json();
  return obj;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
