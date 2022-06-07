require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('checks if fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('checks if fetch is being called inside fetchItem', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('checks if fetch inside fetchItem uses the specified endpoint', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  it('returns a data structure similar to "item" when argument for fetchItem is "MLB1615760527', async () => {
    expect(await fetchItem('MLB1615760527')).toStrictEqual(item);
  })
  it('returns error when fetchItem is called without an argument', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
