const fetchItem = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const resposta = await fetch(url);
    const data = await resposta.json;
    return data;
} catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
