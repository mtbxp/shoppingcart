require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('if fecth is called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('if fetch uses endpoint', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(endpoint);
  })
  it('if fetchItem return item', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
  it('error returns', async () => {
    const error = new Error('You must provide an url');
    expect(await fetchItem()).toEqual(error);
  })
});
