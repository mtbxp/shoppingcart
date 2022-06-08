  const fetchItem = async () => {
  const QUERY = 'coputador';
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const reponse = await fetch(endPoint);
  console.log(reponse);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
