const fetchItem = (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
 
    return fetch(`https://api.mercadolibre.com/items/${param}`)
    .then((response) => response.json())
    .then((item) => item);
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
