require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('should call fetch when \'fetchProducts\' is called with \'computador\' as parameter', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('should be called with the correct endpoint', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('should return an object equal to \'computadorSearch\'', async () => {
    const expected = await fetchProducts('computador');
    expect(expected).toEqual(computadorSearch);
  });
  it('should throw an error when called without parameters', async () => {
    try {
      await fetchProducts();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
