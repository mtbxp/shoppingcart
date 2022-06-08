require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  test('se a fetch é chamada', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })
  test('se fetch é chamada com o link certo', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })
  test('se a fetch item volta certo com o id', async () => {
    const resultado = await fetchItem('MLB1615760527')
    expect(typeof resultado).toBe('object')
  })
});
