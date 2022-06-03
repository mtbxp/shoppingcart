require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Should return function when typeof fetchProducts is called.', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Should call fetch when fetchProducts(\'computador\') is called.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Should use url when fetchProducts(\'computador\') is called.', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });

  it('Should\'d have diferrence between fetchProducts(\'computador\') and computadorSearch.', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('Should return new Error (\'You must provide an url\') when fetchProducts(\'\') is called.', async () => {
    expect(await fetchProducts('')).toEqual(new Error('You must provide an url'));
  });

  it('Should return new Error (\'An error occurred\') when fetchProducts(\'undefined\') is called.', async () => {
    expect(await fetchProducts(undefined)).toEqual(new Error('An error occurred. :c'));
  });
});
