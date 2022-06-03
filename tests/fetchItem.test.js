require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it (`Teste se fetchItem é uma função`, async () => {
    const response = await fetchItem();
    expect(response).toEqual('function');
  })
  // it(`Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada`, async () => {
  //   await fetchItem('MLB1615760527');
  // })
  it(`Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'`, async () => {
    const response = await fetchItem();
    expect(response).not.toEqual( Error('You must provide an url'));
  })
  
});
