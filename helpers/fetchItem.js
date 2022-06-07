// const fetch = require('node-fetch');

const getItem = (itemId) => `https://api.mercadolibre.com/items/${itemId}`;

const fetchItem = async (searchItem) => {
  // seu código aqui
  if (!searchItem) {
    return new Error('You must provide an url');
  }
    const url = getItem(searchItem);
    const responseItem = await fetch(url);
    const resultItem = await (responseItem.json());
    // console.log([resultItem]);
    return [resultItem];
};

// fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
