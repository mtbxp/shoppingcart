// const fetch = require('node-fetch');

const getProduct = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (listProduct) => {
  // seu código aqui
  if (!listProduct) {
    return new Error('You must provide an url');
  }
    const url = getProduct(listProduct);
    const response = await fetch(url);
    const dataResults = await (response.json());
    // const resultsReduced = dataResults.results.map((element) => {
    //   const obj = { sku: element.id, name: element.title, image: element.thumbnail };
    //   return obj;
    // });
    console.log(dataResults.results);
    return dataResults.results;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}