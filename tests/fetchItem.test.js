require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui d
  test('Teste se fetchItem é uma função', () => {
    expect(fetchItem).toBeDefined();
  });
  test('Executa a função fetchItem com o argumento MLB1615760527 e testa se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Ao chamar a função fetchItem com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
  await fetchItem('computador');
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/computador');
  }); 
  test('Teste se o retorno da função fetchItem com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto item', async () =>
  {
  expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => 
  {
  try {
  await fetchItem();
  } catch (error) {
  expect(error).toEqual(new Error('You must provide an url'));
  }
  });
  fail('Teste vazio');
});
