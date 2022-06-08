// const fetch = require('node-fetch');

const fetchItem = async (digitado) => {
  const url = `https://api.mercadolibre.com/items/${digitado}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
