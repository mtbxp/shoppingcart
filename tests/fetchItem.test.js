require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

const urlItem = 'https://api.mercadolibre.com/items/MLB1615760527';

describe('2 - Teste a função fetchItem', () => {
  it('test if fetchItem is a function', () => {
      expect(typeof fetchItem).toBe('function');
  });

  it('test if when the function fetchProducts as an argument `computador`, the function use the right endpoint ', () => {
    fetchProducts('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(urlItem);
  });

  it('test if the return of fetchProducts as an argument `cumputador is the same estructure of computadorSearch', async () => {
    const testItemEstructure = await fetchItem('MLB1615760527');
    expect(testItemEstructure).toStrictEqual(item);
  })

  it('test if you call the function fetchItem without an argument return the error `You must provide an url`', async () => {
    const itemResponse = await fetchItem();
    expect(itemResponse).toEqual(new Error ('You must provide an url'));
  });
});
