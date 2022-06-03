const fetchProducts = (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
                                                                                                                                                                                                                               
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`)
  .then((response) => response.json())
  .then((product) => product)
  .catch((error) => error);
 
};

if (typeof module !== "undefined") {
  module.exports = {
    fetchProducts,
  };
}
