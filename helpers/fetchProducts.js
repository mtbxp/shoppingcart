const fetchProducts = async (tipoProduto) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${tipoProduto}`;
    const result = await fetch(url);
    const data = await result.json();
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
