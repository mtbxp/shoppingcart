const fetchProducts = async (parm) => {
  try {  
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parm}`);
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
