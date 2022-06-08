const fetchItem = async (item = '') => {
  if (item === '') {
    return new Error('You must provide an url');
  }
  const fullUrl = `https://api.mercadolibre.com/items/${item}`;
  const response = await fetch(fullUrl);
  const compData = await response.json();
  
  return compData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
