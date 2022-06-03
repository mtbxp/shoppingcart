require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem is a function', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  it('check if fetch is called when running fetch item with yellow MLB1615760527', async () => {
        await fetchItem('MLB1615760527');
        expect(fetch).toHaveBeenCalled();
  });
  it('return of fetchItem wit argment MLB1615760527 is equal of item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
  it('endPoint of fetchItem is euqal to https://api.mercadolibre.com/items/MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })
  it('fetchItem with no parameter should return You must provide an url', async () => {
    expect(fetchItem()).toThrow('You must provide an url');
  })
});
