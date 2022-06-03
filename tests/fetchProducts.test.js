require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
test('Testando se fetchProducts é uma função', () => {
  expect(typeof fetchProducts).toEqual('function');
});
});
