const fetchProducts = async (item) => {
  const urlfetchProducts = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {
    const response = await fetch (urlfetchProducts);
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
