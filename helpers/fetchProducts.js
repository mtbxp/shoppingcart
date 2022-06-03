// const fetch = require('node-fetch')

const selectDados = async (data) => {
  const teste = { site_id: data.site_id, 
    query: data.query, 
    paging: data.paging,
    results: data.results, 
    secondary_results: data.secondary_results,
    related_results: data.related_results, 
    sort: data.sort, 
    available_sorts: data.available_sorts,
    filters: data.filters, 
    available_filters: data.available_filters,
  };
  return teste;
};

const fetchProducts = async (product) => {
  // seu código aqui
  if (product === undefined) {
    return 'You must provide an url';
  }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const result = await fetch(url);
    const data = await result.json();

    const teste = selectDados(data);

    return teste;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
