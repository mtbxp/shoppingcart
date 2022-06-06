const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(endpoint);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};
// fetchProducts('computador').then((data) => console.log(data));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
