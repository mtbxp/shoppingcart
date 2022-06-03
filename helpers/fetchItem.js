// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

const fetch = require('node-fetch');

const getURL = (id) => `https://api.mercadolibre.com/items/${id}`;

const fetchItem = async (id) => {
  const response = await fetch(getURL(id));
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
