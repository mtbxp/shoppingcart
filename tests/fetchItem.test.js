require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('3 - Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('4 - Com o argumento "MLB1615760527", a função fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled;
  })
});
