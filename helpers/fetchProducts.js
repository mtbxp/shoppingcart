const ENPOINT_SEARCH = 'https://api.mercadolibre.com/sites/MLB';
const createUrlToGetProductsList = (queryTerm) => `${ENPOINT_SEARCH}/search?q=${queryTerm}`;

const fetchProducts = async (queryTerm) => {
  const url = createUrlToGetProductsList(queryTerm);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    createUrlToGetProductsList,
  };
}
