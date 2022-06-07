require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('A function', async () => {
    const result = fetchProducts;
    
    expect(typeof result).toBe('function');
  });
});