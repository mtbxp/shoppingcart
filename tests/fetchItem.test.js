require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Check if \'fetchItem\' is a function.', async () => {
    expect(typeof fetchItem).toBe('function')
  });
  it('Testa se ao chamar com argumento \'MLB1615760527\' a fetch é chamada.', async () => {
    await fetchItem('MLB1615760527');
      expect(fetch).toHaveBeenCalled();
    });
  it('Testa se ao chamar com argumento \'MLB1615760527\' o endpoint é correto', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Checks if using computer as parameter returns the correct object.', async () => {
    const data = await fetchItem('MLB1615760527');
    expect(data).toEqual(item);
  });
  it('Check if it returns \'You must provide an url\' when executing the function with parameter that does not exist.', async () => {
    const data = await fetchItem();
    expect(data).toEqual(new Error('You must provide an url'))
  });
});
