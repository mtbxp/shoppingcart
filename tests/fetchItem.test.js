require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';

  test('Verifica se fetchItem é uma função.', async () => {
    await fetchItem;
    expect(typeof fetchItem).toEqual('function');
  });

  test('Verifica se fetch é chamada ao executar fetchItem com o argumento do item MLB1615760527.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('Verifica se, ao colocar MLB1615760527 como argumento do item, a função fetch utiliza o endpoint.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  test('Verifica se o retorno da função fetchItem, com o argumento MLB1615760527, é uma estrutura de dados igual ao objeto item.', async () => {
    const result = await fetchProducts('MLB1615760527');
    expect(result).toStrictEqual(item);
  });

  test('Verifica se é retornado um erro quando nenhum argumento é passado.', async () => {
    await expect(fetchItem()).rejects.toThrowError(new Error('You must provide an url'));
  });
  
});
