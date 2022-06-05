const fetchItem = async (idProduto) => {
  try {
    const urlId = `https://api.mercadolibre.com/items/${idProduto}`;
    const idResponse = await fetch(urlId);
    const objId = await idResponse.json();
    return objId;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
