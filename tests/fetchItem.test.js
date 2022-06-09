require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('tests if fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('tests if fetch is called, when fetchItem is executed with the argument \'MLB1615760527\'', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('tests if, by calling the function fetchItem with the argument \'MLB1615760527\', the function fetch use the endpoint \'https://api.mercadolibre.com/items/MLB1615760527\'', async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527"
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('tests if the function fetchItem with the argument \'MLB1615760527\', return a data structure like the object from \'item\'', async () => {
    const actual = await fetchItem('MLB1615760527');
    expect(actual).toEqual(item);
  });

  it('tests if the function fetchItem with no argument , return an error with the message: "You must provide an url"', async () => {
    const actual = await fetchItem();
    expect(actual).toEqual(new Error('You must provide an url'));
  });
});
