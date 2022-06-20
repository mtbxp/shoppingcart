require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  it('test if fectchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('test if fectchProducts with parameter `computador` the fetch was called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('test if fectchProducts is a function', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('test if fectchProducts with parameter `computador` the fetch was called', async () => {
    const result = await fetchItem('computador');
    expect(result).toEqual(item);
  })

  it('se a função não tiver parâmetro, retorn um erro', () => {
    const actual = fetchItem();
    expect(actual).toEqual(new Error('You must provide an url'));
  })
});
