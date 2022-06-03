require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it(`Quando a função fetchProducts é executada com o argumento 'computador', a fetch é chamada`, async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
});

// it('', () => {
    
// })
