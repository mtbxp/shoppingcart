require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  test('fetch é chamado na função fetchproduct', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('retorno esperado da função', async (done) => {
    const expected = await fetchProducts();
    done();
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
    expect(() => expected).toEqual(new Error('You must provide an url'));
  });
});
