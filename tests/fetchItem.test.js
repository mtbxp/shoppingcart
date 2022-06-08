require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Testando se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Testando se fetch foi chamada ao passar "MLB1615760527" como argumento', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Testando se ao chamar a função utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    const urlRequest = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(urlRequest);
  });
  test('Testando tipo de retorno da função', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(typeof expected).toBe('object');
  })
  test('Testando se o retorno da função é uma estrutura de dados correta', async () => {
    expect(await fetchItem('MLB1615760527')).toHaveLength(1);
  });
  test('Testando se ao chamar a funçao sem argumento, retorna um erro', async () => {
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
