require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  test('testa se a função fetch() foi chamada ao usar o argumento "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  test('testa se a função retorna o objeto correto', async ()=> {
    const retornaItem = await fetchItem('MLB1615760527');
    expect(retornaItem).toEqual(item);
  })
  test('testa se ou receber um produto invalido envia uma mensagem de erro', async () => {
    const funcaoVazia =  await fetchItem();
    expect(funcaoVazia).toEqual(new Error('You must provide an url'))
  });
});
