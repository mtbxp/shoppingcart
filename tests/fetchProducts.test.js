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

  it('function fetch use the endpoint "url"', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(url);
  });
});
