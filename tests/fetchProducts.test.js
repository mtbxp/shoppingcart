require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('checks if fetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('checks if fetch is being called inside fetchProducts', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('checks if fetch inside fetchProducts uses the specified endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it('returns a data structure similar to computadorSearch when argument for fetchProduct is "computador"', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('returns error when fetchProducts is called without an argument', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  })
});
