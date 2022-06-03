require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

describe('1 - Teste a função fetchProducts', () => {
  it('FetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('When fetchProducts is run with computador as an argument, feth is called', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('When fetchProducts is run with computador as an argument, the function fetch run with the right endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url)
  });
  it('When fetchProducts is run with computador as an argument, the return had the same struture as computadorSearch', async () => {
    expect(typeof await fetchProducts('computador')).toBe(typeof computadorSearch);
  });
  it('When fetchProdcts is called without argument, return error', async () => {
    try {
      await fetchProducts();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });
});
