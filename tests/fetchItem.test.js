require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('1 Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('2 Execute a função com o argumento do item "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('3 A função fetch utiliza o endpoint correto', async () => {
    const ENDPOINT = `https://api.mercadolibre.com/items/MLB1615760527`;
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledWith(ENDPOINT);
  })
  it('4 É uma estrutura de dados igual ao objeto item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  })
  it('4 A função sem argumento', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
