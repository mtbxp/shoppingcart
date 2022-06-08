const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
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
