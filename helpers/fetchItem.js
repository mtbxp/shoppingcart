const fetchItem = async (item) => {
  try {
    const api = `https://api.mercadolibre.com/items/${item}`;
    const dados = await fetch(api);
    const data = await dados.jason();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
