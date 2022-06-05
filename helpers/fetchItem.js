const fetchItem = async (end) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${end}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (erro) {
    return erro;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
