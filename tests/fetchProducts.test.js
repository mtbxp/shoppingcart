require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;

describe('1 - Teste a função fetchProducts', () => {
  it('Se fetchProducts é um função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Se a função foi chamada', () => {
    fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint correto', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenLastCalledWith(endPoint);
  });
});
