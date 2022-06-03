require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Ao executar a função fetchProducts com o argumento (computador) fetch deve ser chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  test('Ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint (https://api.mercadolibre.com/sites/MLB/search?q=computador)', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  })

  fail('Teste vazio');
});
