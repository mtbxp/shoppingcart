const getFetchItemURL = (endpoint) => `https://api.mercadolibre.com/items/${endpoint}`;

const fetchItem = async (endpoint) => {
  try {
    const url = getFetchItemURL(endpoint);
    const response = await fetch(url);
    return await response.json();
    // return data;
  } catch (error) {
    return error;
  }
};

// function extractDatas
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}