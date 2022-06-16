const fetchProducts = async (param) => {
  try {
    if (param === undefined) { throw new Error('You must provide an url'); }
    const link = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
const response = await fetch(link);
const data = await response.json();
return data;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
