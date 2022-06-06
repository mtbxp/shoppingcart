const fetchProducts = async (param) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
