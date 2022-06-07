const fetchProducts = async (product) => {
const url = (busca) => `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
 const response = await fetch(url(product));
 const computers = await response.json();
 if (response) {
     return computers;
   }
 
 if (product === undefined) {
   throw new Error('You must provide an url');
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
