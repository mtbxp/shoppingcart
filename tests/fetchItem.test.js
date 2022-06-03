require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('test the function fetchItem', () => {
  it('a function', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  
  it('function fetchItem was called', async () => {
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledTimes(1);
  });

});
