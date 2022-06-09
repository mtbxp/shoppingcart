const creatUrl = (urlInfo) => `https://api.mercadolibre.com/sites/MLB/search?q=${urlInfo}`;

const fetchProducts = async (urlInfo) => {
  if (urlInfo === undefined) return new Error('You must provide an url.');
  const response = await fetch(creatUrl(urlInfo));
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
