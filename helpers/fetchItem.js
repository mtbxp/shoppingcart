const fetchItem = async (param) => {
  const endpoint = `https://api.mercadolibre.com/items/${param}`;
  const resultado = await fetch(endpoint)
   .then((response) => response.json())
   .then((obj) => obj)
   .catch((error) => error);

  return resultado;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
