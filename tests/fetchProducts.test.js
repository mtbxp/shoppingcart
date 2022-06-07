const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const fetchSimulator = require('../mocks/fetchSimulator');

describe('1 - Teste a função fetchProducts', async () => {
  it('is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('calls fetch when called with computador as argument', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('is fetching the expected endpoint when called with computador as argument', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('returns the expected data when called with computador as argument', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('returs the expected error when called without an argument', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  });
});
