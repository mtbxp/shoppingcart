require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('se fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('se o endpoint esta correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint)
  });
  test('se a estrutura retornada é parecida com a da mock itens', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  });
  test('se a url estiver vazia retorna um erro', async () => {
    const expected = await fetchItem();
    expect(expected).toEqual(new Error('You must provide an url'));
  });
});
