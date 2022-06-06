require('../mocks/fetchSimulator');

const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('deve chamar a funcao fetch em algum momento', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('se o endpoint do argumento computador está correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  })
  test('se a estrutura de dados retornada é igual ao objeto de computador search', async () => {
    const selectDados = async (data) => {
      const resultsSelected = { site_id: data.site_id, 
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
      return resultsSelected;
    };
    const data = await(fetchProducts('computador'));
    const teste = await selectDados(data);
    expect(Object.keys(teste)).toEqual(Object.keys(computadorSearch))
  })
  test('se a url estiver vazia retorna um erro', async () => {
    expect(await fetchProducts()).toBe('You must provide an url');
  })
});
