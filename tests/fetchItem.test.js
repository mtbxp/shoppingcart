require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
test( 'Testando se a função fetchItem é uma função', () => {
  expect(typeof fetchItem).toEqual('function');
});
test('Passando como argumento "MLB1615760527" e verificando se a fetch foi chamada', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalled();
});
test('Passando o argumento "MLB1615760527", se a fetch utiliza o endpoint', async () => {
  const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledWith(endpoint);
});
test('Testando se o retorno da função fetchItem com o argumento "MLB1615760527" tem estrutura de dados igual ao objeto "item"', async () => {
const expectNewObject = await fetchItem('MLB1615760527');
expect(expectNewObject).toEqual(item);
});
test('Testando se ao chamar a função fetchItem sem nenhum argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
const expectError = await fetchItem();
expect(expectError).toEqual(new Error('You must provide an url'));
});
});
