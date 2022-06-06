require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('should have called fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('should uses a specific endpoint when calling fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('should return the correct item', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('should return an error when called without arguments', async () => {
    expect(await fetchItem()).toEqual(new Error ('You must provide an url'));
  });
  // fail('Teste vazio');
});