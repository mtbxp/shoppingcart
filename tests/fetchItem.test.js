require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  test('Se ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {
    const endpoint = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(endpoint);
  })
  test('se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado.', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  })
  test('Ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error ('You must provide an url'));
  })
});
