require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const fetchProductsFunction = fetchProducts;
  it('Verifica se fetchProdutcs é uma função', () => {
    expect(typeof (fetchProductsFunction)).toBe('function');
  })
  fail('Teste vazio');
});
