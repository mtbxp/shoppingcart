const fetchItem = async (ItemID) => {
  // const response = fetch(url)
  //   .then((data) => data.json())
  //   .then((result) => result)
  //   return result;
  try {
  const response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
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
