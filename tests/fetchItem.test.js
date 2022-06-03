require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('calls fetch function when called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('calls fetch function when called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('returns an object equal to item when called with "MLB1615760527" as argument', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('returns an error when called without argument', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
