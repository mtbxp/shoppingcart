require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('test the function fetchItem', () => {
  it('a function', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  
  it('function fetchItem was called', async () => {
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('function fetch use the endpoint "url"', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';

    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('function return a object equal to item', async () => {
    const product = await fetchItem('MLB1615760527');
  
    expect(product).toEqual(item);
  });

  it('function without argument returns Error', async () => {
    const product = await fetchItem('');
  
    expect(product).toEqual(new Error('You must provide an url'));
  });
});

