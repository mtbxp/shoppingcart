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
  })

  fail('Teste vazio');
});
