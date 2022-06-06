const url = (busca) => `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;

const fetchProducts = async (product) => {
 const response = await fetch(url(product));
 const computers = await response.json();
 if (response) {
  const computadores = computers.results;
     return computers;
   }
 
 if (product === undefined) {
   throw new Error('You must provide an url');
 }
};

// console.log(fetchProducts('computador'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
