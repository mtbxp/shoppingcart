/**
 * @jest-environment jsdom
 */
require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('should call fetch', async () => {
    const fetchedRequest= await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('should use the expected endpoint', async () => {
    const fetchedRequest = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('should return the expected data structure', async () => {
    const expectedDataStructure = item;
    const fetchedRequest = await fetchItem('MLB1615760527');
    expect(fetchedRequest).toBe(expectedDataStructure);
  });
  it('should return an error with "You must provide an url"', async () => {
    const fetchedRequest = await fetchItem();
    expect(fetchedRequest).toEqual(new Error("You must provide an url"));
  });
  // fail('Teste vazio');
});
