// const fetchProductsUrl = (product) =>
//   `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY/${product}`;

const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
  
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => `You must provide an url \n${error}`);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
