require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('calls fetch when called with MLB1615760527 as argument', async () => {
    await fetchItem('MLB1615760527');
    
  })
});
