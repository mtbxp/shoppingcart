require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Se fetchProdutchs é uma função', () => {
    //Ficar de olho na linha 9, pois a função ainda não está assíncrona
    expect(typeof fetchProducts).toBe('function');
  });
  test('Verifica o endpoint quando fetchProducts é passada com o argumento "computador"', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  test('Verifica se o retorno de fetchProducts com o argumento "computador" é o objeto de computadorSearch', async () => {
    const responseFromAPI = await fetchProducts('computador');
    expect(responseFromAPI).toStrictEqual(computadorSearch.results);
  });
  test('Verifica se fetchProducts retorna erro quando nenhum argumento é passado', async () => {
    const responseFromAPI = await fetchProducts();
    expect(responseFromAPI).toEqual(new Error('You must provide an url'));
  });
});
