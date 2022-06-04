require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifique se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });

  it('Verifique se ao receber ao receber a função fetchProducts ao receber o argumento computador chama a fetch', async () => {
    fetchProducts('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });



});
