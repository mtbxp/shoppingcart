require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('É uma funçao', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Chama fetch quando o argumento é "MLB1615760527"', async () => {
    expect.assertions(1)
    const result = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('A função fetch utiliza o endpoint correto', async () => {
    expect.assertions(1);
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    const result = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Retorna o objeto esperado', async ()=> {
    expect.assertions(1);
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  it('Quando chamada sem parâmetros, lança o erro esperado', async () => {
    expect.assertions(1);
    const expected = new Error('You must provide an url');
    const result = await fetchItem();
    expect(result).toEqual(expected);
  });
});
