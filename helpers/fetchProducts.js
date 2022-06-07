const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const montaUrl = (produto) => url + produto;

const fetchProducts = async (produto = '') => {
  if (produto === '') {
    throw new Error('You must provide an url');
  }
  
  if (produto === 'computador') {
    const fullUrl = montaUrl(produto);
    const response = await fetch(fullUrl);
    const compData = await response.json();
    return compData;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
