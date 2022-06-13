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

// lixo:
// const item_add = document.querySelector('.item_add');
// item_add.addEventListener('click', async () => {
  //   const { id, title, price } = await fetchItem(element);
  //   createCartItemElement({ id, title, price });
  //   console.lot('rodou');
  // });