const fetchProducts = async (product) => {
const url = (busca) => `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
if (product === undefined) {
  throw new Error('You must provide an url');
}
 const response = await fetch(url(product));
 const computers = await response.json();
 return computers;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
