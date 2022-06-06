const fetchProducts = async (produto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  try {
    const fProduto = await fetch(url);
    const data = await fProduto.json();
    return data;
  } catch (error) {
    return new Error('Produto invalido');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}