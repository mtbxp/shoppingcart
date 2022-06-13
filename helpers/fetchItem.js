const fetchItem = async (ItemID) => {
  // seu código aqui
  const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
  
  try {
    const response = await fetch(endpoint);
    const final = await response.json();
    return final;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

/*
const item_add = document.getElementsByClassName('item_add');
const item = document.getElementsByClassName('item'); 
*/