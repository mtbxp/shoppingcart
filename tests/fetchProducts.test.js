require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('test if fectchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('test if fectchProducts with parameter `computador` the fetch was called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('test if fectchProducts is a function', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('test if fectchProducts with parameter `computador` the fetch was called', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  })

  it('test if fectchProducts is a function', () => {
    const actual = fetchProducts();
    expect(actual).toEqual(new Error('You must provide an url'));
  })
});
