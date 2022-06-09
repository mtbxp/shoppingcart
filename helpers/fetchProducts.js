const fetchProducts = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
    const promise = await fetch(url);
    const result = await promise.json();
    return result;
  } catch (error) {
    return error;
  }
};
/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
