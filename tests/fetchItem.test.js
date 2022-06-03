require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('fetch é chamado na função fetchItem', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('retorno esperado da função', async (done) => {
    const expected = await fetchProducts();
    done();
    expect(await fetchItem('MLB1615760527')).toEqual(item);
    expect(() => expected).toEqual(new Error('You must provide an url'));
  });
});
