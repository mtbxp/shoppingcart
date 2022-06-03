const fetchProducts = async (product) => {
  try {
    const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const results = await url.json();
    return results;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
