const fetchProducts = async (computador) => {
  // seu código aqui
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const response = await fetch(endpoint);
    const data = response.json();
    // console.log(response);
    return data;
  } catch (error) {
    return error;
  }
};
// fetchProducts();
// fetchProducts('computador').then((data) => console.log(data));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
