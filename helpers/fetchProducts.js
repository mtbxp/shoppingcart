const fetchProducts = async (computador) => {
 const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${computador}`);
 const result = await response.json();
 return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
