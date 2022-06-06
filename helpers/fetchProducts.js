const fetchProducts = async (computador) => {
  try {
    const api = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const dados = await fetch(api);
    const data = await dados.json();
    return data.results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
