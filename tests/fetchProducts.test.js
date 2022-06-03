require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Deveria falhar se fetchProducts não for uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
});
