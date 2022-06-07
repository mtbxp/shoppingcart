require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('verificar se a fetch foi chamada, ao executar a função fetchItem com o argumento "MLB1615760527"', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  test('se o endpoint está correto, ao executar fetchItem com o argumento "MLB1615760527"', () => {
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527';
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(expected);
  });

  test('deve retornar um objeto com as informações esperadas', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });

  test('ao chamar fetchItem sem parâmetros, deve retornar o erro ', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(Error('You must provide an url'));
    }
  });
});
