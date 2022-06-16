/**
 * @jest-environment jsdom
 */

require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('should call fetch', async () => {
    const fetchedRequest= await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('should use the expected endpoint', async () => {
    const fetchedRequest = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('should return the expected data structure', async () => {
    const expectedDataStructure = computadorSearch;
    const fetchedRequest = await fetchProducts('computador');
    expect(fetchedRequest).toBe(expectedDataStructure);
  });
  it('should return an error with "You must provide an url"', async () => {
    const fetchedRequest = await fetchProducts();
    expect(fetchedRequest).toEqual(new Error("You must provide an url"));
  });
});
