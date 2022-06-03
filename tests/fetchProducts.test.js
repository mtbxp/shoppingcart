require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('testa se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('testa se a função fecth() foi chamada', () => {
    fetchProducts();
    expect(fetch).toHaveBeenCalled();
  });

  test('testa se ao chamar a função fetchProducts com o argumento "computador", a função fetch possui o url correto', () => {
    const urlComputador = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(urlComputador);
  });

  test('testa se o retorno da função está correto', async () => {
    const dataComputador = await fetchProducts('computador');
    expect(dataComputador).toEqual(computadorSearch);
  })
});
