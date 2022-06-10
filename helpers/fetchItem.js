const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(url);  
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

async function printAPI(id) {
  console.log(await fetchItem(id));
}

// printAPI('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
