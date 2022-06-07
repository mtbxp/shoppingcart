require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('testa se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toBe('function')
  });
  it(' verifica se fetch foi chamada com o argumento computador', async () => {
    await expect(fetchProducts('computador')).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint correto', async () => {
    await expect(fetchProducts('computador')).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  it('Testa se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProducts('computador')).toEqual(computadorSearch)
  });
  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    await expect(fetchProducts()).toEqual(new Error('You must provide an url'))
  });
});
