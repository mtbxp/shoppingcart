require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const url = 'https://api.mercadolibre.com/items/MLB1615760527';

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('When fetchItem is run with MLB1615760527 as an argument, feth is called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('When fetchItem is run with MLB1615760527 as an argument, the function fetch run with the right endpoint', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });
  it('When fetchItem is run with MLB1615760527 as an argument, the return had the same struture as item', async () => {
    expect(typeof await fetchItem('MLB1615760527')).toBe(typeof item);
  });
  it('When fetchItem is called without argument, return error', async () => {
    try {
      await fetchItem();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });
});
