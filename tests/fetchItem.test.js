require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Test fetchItem function', () => {
  it('Should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Should call the fetch function, given the argument `MLB1615760527`', async () => {
    await fetchItem('MLB1615760527');
    expect.assertions(1);
    expect(fetch).toBeCalled();
  });
  it('Should call fetch function with expected endpoint, with argument `MLB1615760527`', async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem('MLB1615760527');
    expect.assertions(1);
    expect(fetch).toBeCalledWith(url);
  });
  it('Should return the `item` object given the argument `MLB1615760527`', async () => {
    const result = await fetchItem('MLB1615760527');
    expect.assertions(1);
    expect(result).toEqual(item);
  });
  it('Should return a error message given no argument', async () => {
    const result = await fetchItem();
    expect.assertions(1);
    expect(result).toEqual(new Error('You must provide an url'));
  });
});
