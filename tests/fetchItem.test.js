require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('deve retornar uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('se a função é chamada ao ser executada com o argumento `MLB1615760527`', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  test('se ao chamar a função com o argumento `MLB1615760527` é utilizado o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(endpoint);
  });
  test('o retorno da função com o argumento `MLB1615760527`', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test('se é retornado uma mensagem de erro ao passar a função sem argumentos', async () => {
    await expect(fetchItem()).rejects.toThrow(new Error ('You must provide an url'));
  });
});
