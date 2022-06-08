require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Testa se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('Testa se o fetch está sendo chamado', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('Testa se executa o fetch no endpoint correto', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });

  test('Testa se a função retorna um arquivo de dados do tipo objeto', async () => {
    const url = await fetchItem('MLB1615760527');
    expect(url).toEqual(item);
  });

  test('Testa se a função retorna um erro ao não receber argumentos', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
