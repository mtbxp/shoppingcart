require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('fetchItem deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('fetch deve ser chamada caso a função fetchItem seja chamada com o argumento \'MLB1615760527\'', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('a função fetch deve utilizar o endpoint \'https://api.mercadolibre.com/items/MLB1615760527\' ao ser chamada com o argumento \'MLB1615760527\'', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  test('se o retorno da função fetchItem com o argumento \'MLB1615760527\' é uma estrutura de dados igual ao objeto \'item\'', async () => {
    expect.assertions(1);
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item)
  });

  test('se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: \'You must provide an url\'', async () => {
    expect.assertions(1);
    try {
      await fetchItem();
    } catch (err) {
      expect(err).toEqual(new Error('You must provide an url'));
    }
  });
});
