require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é funçao', () => {
    expect(typeof fetchItem).tobe('function');
  });
  it('Testa se fetchItem recebe "MLB1615760527" e tem endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async() => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
});