require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('calls fetch when called with MLB1615760527 as argument', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  })
  it('is fetching the correct endpoint when called with MLB1615760527 as argument', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('returns the expected data structure when called with MLB1615760527 as argument', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
  it('returns the expected error when called without an argument', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
