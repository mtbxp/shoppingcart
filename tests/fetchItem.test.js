require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
test('Se fetchItem é uma função' , async () => {
  await expect(typeof fetchItem).toBe('function')
})
test('Se quando executar fetchItem com o argumento "MLB1615760527" a função fetch é chamada', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toBeCalled();
})
test('Se quando o argumento é "MLB1615760527" o fecth retorna o Endpoint certo', async () => {
  await fetchItem('MLB1615760527');
  const url = 'https://api.mercadolibre.com/items/MLB1615760527';
  expect(fetch).toBeCalledWith(url);
})
test('Se quando o argumento é "MLB1615760527" retorna um arquivo igual ao esperado', async () => {
  expect(await fetchItem('MLB1615760527')).toStrictEqual(item);
})
test('Deve retornar a mensagem \'You must provide an url\' quando a função é chamda sem argumento', async () => {
  expect(await fetchItem()).toBe('You must provide an url');
})
});
