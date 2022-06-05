const getComputer = (param) => `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  
const fetchProducts = async (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
const result = await fetch(getComputer(param));
const data = await result.json();
return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    getComputer,
  };
}
