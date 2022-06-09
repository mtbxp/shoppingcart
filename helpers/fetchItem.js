const fetchItem = async (ItemID) => {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${ItemID}`;
    const reponse = await fetch(endPoint);
    const id = await reponse.json();
    return id;
  } catch (ERRO) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
