require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
test( 'testando se a função fetchItem é uma função', () => {
  expect(typeof fetchItem).toEqual('function');
});
});
