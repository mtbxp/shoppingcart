const fetchItem = async (id) => {
  // seu código aqui
  const endpoint = `https://api.mercadolibre.com/items/${id}`;

  try {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
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
