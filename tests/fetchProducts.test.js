require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('if fecth is called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('if fetch uses endpoint', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  })
  it('if fetchProducts return computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('error returns', async () => {
    const error = new Error('You must provide an url');
    expect(await fetchProducts()).toEqual(error);
  })
});
