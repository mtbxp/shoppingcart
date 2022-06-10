const fetchItem = async (codigo) => {
  try {
    const promises = await fetch(`https://api.mercadolibre.com/items/${codigo}`);
    const objeto = await promises.json();
    return objeto;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
