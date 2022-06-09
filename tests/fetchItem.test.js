require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('se ao chamar com o argumento do item "MLB1615760527", o fetch foi chamado', async () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test(`passando o argumento do item "MLB1615760527", a função fetch utiliza o endpoint
  "https://api.mercadolibre.com/items/MLB1615760527"`, async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test(`passando o argumento do item "MLB1615760527", retorna uma estrutura de dados 
    igual ao objeto item`, async () => {
      expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test(`sem argumento, retorna um erro com a mensagem: 'You must provide 
  an url'.`, async () => {
    const errorM = 'You must provide an url';
    const result = await fetchItem();
    expect(result).toEqual(new Error(errorM));
  });
});
