require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  test('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527')
    const endPoint = "https://api.mercadolibre.com/items/MLB1615760527";
    expect(fetch).toBeCalledWith(endPoint);
  })
  test('se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
  test('se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const erro = new Error ('You must provide an url')
    expect(await fetchItem()).toEqual(erro);
  })
});
