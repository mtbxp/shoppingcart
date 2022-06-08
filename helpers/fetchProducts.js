const fetchProducts = async (query) => {
  const urlApi = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const itemApi = await fetch(urlApi);
    const data = await itemApi.json();
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
