require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('test fetchProducts is a function', () => {
    expect(typeof fetchProducts).toEqual('function')
  });
  it('called fetch if argument of fetchProducts to computer', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('end point for fetchProducts is', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });
  it('compara o retorno de fetchProducts e computadorSearch', async () => {    
    const data = await fetchProducts('computador');
    expect(data).toMatchObject(computadorSearch.results);
  });
  it('fetchItem with no parameter should return You must provide an url', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error.message).toBe('You must provide an url')
    }
  })
});
