const fetchItem = async (itemID) => {
  const url = `https://api.mercadolibre.com/items/${itemID}`;
  /* const response = fetch(url).then((response2) => response2.json())
  .then((data) => data);
  return response; */
  try {
    const response = await fetch(url);
    const data = await response.json();
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
