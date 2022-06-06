const fetchProducts = async (entry) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${entry}`);
    const data = await response.json();
    // console.log(data);
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
