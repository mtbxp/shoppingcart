require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('should call fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('should be uses a certain endpoint', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('should returns an specific object when passing computer as parameter', () => {
    expect(fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('should returns an error when called without parameters', () => {
    expect(fetchProducts()).toEqual(new Error ('You must provide an url'));
  });
  fail('Teste vazio');
});
