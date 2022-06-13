const fetchItem = async (computador) => {
  // seu código aqui
  try {
    const endpoint = `https://api.mercadolibre.com/items/${computador}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    // console.log(response);
    return data;
  } catch (err) {
    return err;
  }
};
// fetchItem();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
