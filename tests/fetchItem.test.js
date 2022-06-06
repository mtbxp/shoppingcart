require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('should call fetch when \'fetchItem\' is called with \'MLB1615760527\' as parameter', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  it('should be called with the correct endpoint', async () => {
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });
  it('should return an object equal to \'item\'', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  });
  it('should throw an error when called without parameters', async () => {
    try {
      await fetchItem();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
