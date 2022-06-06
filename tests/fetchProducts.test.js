require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Deve retorna uma function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Deve retorna uma function', () => {
    expect(fetchProducts('computador')).toHaveBeenCalled();
  });
  // fail('Teste vazio');
});
