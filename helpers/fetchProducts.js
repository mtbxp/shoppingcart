const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
  const request = await fetch(url);
  const data = await request.json();
  const item = data.results;
  // console.log(item);
  return item;
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
