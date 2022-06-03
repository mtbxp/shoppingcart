require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('test the function fetchProducts', () => {
  it('a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('function fetchProducts was called', async () => {
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
