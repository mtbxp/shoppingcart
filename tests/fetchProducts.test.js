require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  it('Teste se fetchProducts é uma função.', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });

  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', () => {
    expect(fetchProducts('computador')).toBeCalled;
  })
});
