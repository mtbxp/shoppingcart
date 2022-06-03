require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Should return function when typeof fetchItem is called.', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Should call fetch when fetchItem(\'MLB1615760527\') is called.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Should use url when fetchItem(\'MLB1615760527\') is called.', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });

  it('Should\'d have diferrence between fetchItem(\'MLB1615760527\') and item.', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  it('Should return new Error (\'You must provide an url\') when fetchItem(\'\') is called.', async () => {
    expect(await fetchItem('')).toEqual(new Error(new Error('You must provide an url')));
  });

  it('Should return new Error (\'An error occurred\') when fetchItem(\'undefined\') is called.', async () => {
    expect(await fetchItem(undefined)).toEqual(new Error('An error occurred. :c'));
  });
});
