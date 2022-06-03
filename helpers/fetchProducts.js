const fetch = require('node-fetch');

const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  
  try {
    const promiseFetch = await fetch(url);
    const results = await promiseFetch.json();
    console.log(results);
  } catch (error) {
    console.log(`Algo deu errado: \n${error}`);
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
