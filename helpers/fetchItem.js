const fetchItem = async (id) => {
  if (!id) { throw new Error('You must provide an url'); }
  
  const URL = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
