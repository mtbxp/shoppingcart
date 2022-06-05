const fetchProducts = async (produto) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
    const resultFetch = await fetch(url);
    const objRetornado = await resultFetch.json();
    return objRetornado;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
