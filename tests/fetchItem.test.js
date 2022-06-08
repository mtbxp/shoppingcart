require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testing if fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Executing the fetchItem with MLB1615760527 parameter, to see if fetch is called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenColled();
  });
  it('Testing if colled fetchItem the endpoint is correct', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenColledWith('endpoint');
  });
  it('Testing if the return of the function is a object iqual to the item ', async () => {
    const returnFetch = await fetchItem('MLB1615760527');
    expect(returnFetch).toEqual(item);
  });
  it('Must return an error', async () => {
    const retorno = await fetchItem();
    const errorMsg = new Error ('You must provide an url');
    expect(retorno).toEqual(errorMsg);
  });
});
