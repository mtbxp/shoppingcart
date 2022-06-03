require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('test the function fetchProducts', () => {
  it('a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  
});
