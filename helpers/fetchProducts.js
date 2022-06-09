const fetchProducts = async (product) => {
  // if (!product) {
  //   throw new Error('You must provide an url');
  // }
  // const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  // const result = await response.json();
  // // console.log(result);
  // return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
