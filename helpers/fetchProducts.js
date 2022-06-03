const fetchProducts = async (parm) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${parm}`;
    const result = await fetch(url);
    const data = result.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
