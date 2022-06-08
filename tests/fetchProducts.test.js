require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Ao chamar a função fetchProducts com o argumento \'computador\', a função fetch utiliza o endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\'', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });

  test('function fetchProducts was called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('Se o retorno da função fetchProducts com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const resultadoEsperado = await fetchProducts('computador');
    expect(resultadoEsperado).toEqual(computadorSearch);
  });
});
