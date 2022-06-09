require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts should be a function', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('fetch should be called with the argument "computador" and the correct url', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador')
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(url);
  });
  it('should return the correct object with the argument "computador"', async () => {
    const fetchProductsComputador = await fetchProducts('computador');
    expect(fetchProductsComputador).toEqual(computadorSearch);
  });
  it('should return an error with when no argument is set', async (done) => {
    const emptyFetchProducts = await fetchProducts();
    expect(emptyFetchProducts).toEqual(new Error('You must provide an url.'));
  });
});
