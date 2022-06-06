const fetchItem = async (id) => {
  // seu código aqui
  if (id === undefined) {
    return 'You must provide an url';
  }
  const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
