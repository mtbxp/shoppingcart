require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('E uma função', () => {
    const product = typeof fetchItem; 
    expect(product).toBe('function');
  })
  it('Se ao chama-la fetch tambem e chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  })
  it('Se ao chama-la fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  it('Se o seu retorno e iqual a item', async () => {
    const product = await fetchItem('MLB1615760527');
    expect(product).toEqual(item);
  })
  it('Se ao chama-la sem parametros retona um erro', async () => {
    try {
      await fetchItem('');
    } catch (error) {
      expect(error).toBe('You must provide an url');
    }
  });
});
