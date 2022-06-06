require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  const argument = 'MLB1615760527';
  test('Testa se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Testa se fetch foi chamada ao executar a função com o argumento "MLB1615760527"', async() => {
    await fetchItem(argument);
    expect(fetch).toHaveBeenCalled();
  });
  test('Testa se fetch utiliza o endpoint ao ser chamada com o argumento', async() => {
    await fetchItem(argument);
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('Testa se o retorno da função com o argumento é uma estrutura de dados igual ao objeto "item"', async() => {
    const functionWithArgument = await fetchItem(argument);
    expect(functionWithArgument).toEqual(item);
  });
  test('Testa se ao chamar a função se argumento, retorna o erro "You must provide an url"', async() => {
    const functionWithNoArgument = await fetchItem();
    expect(functionWithNoArgument).toEqual(new Error('You must provide an url'));
  });
});
