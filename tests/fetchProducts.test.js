require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('se ao chamar com o argumento "computador", o fetch foi chamado', () => {
    const fetch = jest.fn(() => true );
    fetchProducts(fetch(), 'computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  
});
