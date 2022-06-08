const fetchItem = async (ItemID) => {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${ItemID}`;
    const reponse = await fetch(endPoint);
    const id = await reponse.json();
    return id;
  } catch (ERRO) {
    console.log('ERRO');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
