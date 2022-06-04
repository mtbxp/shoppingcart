const ENPOINT_SEARCH = 'https://api.mercadolibre.com/sites/MLB';
const createUrlToGetProductsList = (queryTerm) => `${ENPOINT_SEARCH}/search?q=${queryTerm}`;

const fetchProducts = async (queryTerm) => {
  const url = createUrlToGetProductsList(queryTerm);
  const response = await fetch(url);
  const productList = await response.json();
  return productList;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    createUrlToGetProductsList,
  };
}
