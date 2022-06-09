require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it("fetch should be called with the correct endpoint with the argument 'MLB1615760527'", async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(url);
  });
  it("should return the expected result when called with 'MLB1615760527' as argument", async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  });
  it("should return an error when no argument is set", async () => {
    const emptyItemInfo = await fetchItem();
    expect(emptyItemInfo).toEqual(new Error('You must provide an url'));
  });
});
