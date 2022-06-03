require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('calls fetch function when called', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('returns an object equal to computadorSearch when called with "computador" as argument', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('returns an error when called without argument', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
