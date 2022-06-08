require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  }),
  it('se chamada com o argumento MLB1615760527 invoca a função fetch', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  }),
  it('se chamada com o argumento MLB1615760527 a função fetch utiliza o endpoint correto', async () => {
    const URL = `https://api.mercadolibre.com/items/MLB1615760527`
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(URL);
  }),
  it('se chamada com o argumento MLB1615760527 retorna a computadorSearch', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  }),
  it('se chamada sem argumento retorna o erro You must provide an url', async () => {
    try {
      await fetchItem();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }    
  }),
  fail('Teste vazio');
});
