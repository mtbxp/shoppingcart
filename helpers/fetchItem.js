const fetchItem = async (id) => {
  // seu código aqui
  if (!id) { 
    throw new Error('You must provide an url'); 
  } 
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = await fetch(url);
  const promiseToJson = await promise.json();
  return promiseToJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
