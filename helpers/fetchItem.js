const fetchItem = async (item) => {
    const ENDPOINT = `https://api.mercadolibre.com/items/${item}`;
    const apiReturn = await fetch(ENDPOINT);
    const dataItem = await apiReturn.json();
    return dataItem;
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}