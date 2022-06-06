require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('testa se realmente é uma funçao', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('testa se a função fetch() foi chamada ao usar o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test('testa se a função retorna o objeto correto', async () => {
    const fPComputador = await fetchProducts('computador');
    console.log(fPComputador.results[0].title)
    expect(fPComputador).toEqual(computadorSearch);
  });
  test('testa se ou receber um produto invalido envia uma mensagem de erro', async () => {
    const teste =  await fetchProducts();
    console.log(teste)
    expect(teste).toEqual(new Error('Produto invalido'))
  });
});
