const fetchProducts = async (param) => {
 try {
   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
   const result = await response.json();
   return result;
 } catch (error) {
   return error;
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
