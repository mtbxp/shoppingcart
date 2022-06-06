// const fetch = require('node-fetch');

const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

  if (product) {  
  const response = await fetch(url);
  const data = await response.json();
  return data;
} 
  throw new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
