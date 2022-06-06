// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

// const fetch = require('node-fetch');

const getURL = (id) => `https://api.mercadolibre.com/items/${id}`;

const fetchItem = async (id) => {
  try {
    if (!id) throw new Error('You must provide an url');
    const result = await fetch(getURL(id))
      .then((response) => response.json())
      .then((data) => data);
    // console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};
// fetchItem('MLB1615760527');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
