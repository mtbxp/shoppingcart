require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testa se ao chamar fetchProducts o fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
});
