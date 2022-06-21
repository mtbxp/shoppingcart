require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Testa se "fetchItem" é uma função', () => {
    expect(typeof(fetchItem)).toBe('function');
  })
  test('Testa se "fetch" foi chamada ao executar a função com o argumento "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  })
  test('Testa se  ao chamar a função argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
  await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  test('Testa se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto "item"', async () => {
    expect(await fetchItem('MLB1615760527')).toBe(item);
  })
  test('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
