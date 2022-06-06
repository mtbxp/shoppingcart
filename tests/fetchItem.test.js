require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect(typeof (fetchItem)).toEqual('function');
  });
  it('should return the correct endpoint with the parameter "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Uses the endpoint (url) if the function have "MLB1615760527" as parameter', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('If the function returns the correct data', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test('If the function returns an error when called without parameter', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
