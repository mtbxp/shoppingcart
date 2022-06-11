require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('se ao chamar a função fetchItem com o argumento do item "MLB1615760527" e teste se a função fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  test('se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(endpoint);
  });
  test('se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const fetch = await fetchItem('MLB1615760527');
    expect(fetch).toEqual(item);
  });
  test('se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () =>  {
    const fetch = await fetchItem();
    expect(fetch).toEqual(new Error('You must provide an url'));
  });
});
