require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  
  it('deve chamar a função fetch com argumento `computador`', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('deve chamar a função fetchProducts com o argumento `computador`, a função fetch utiliza o endpoint `https://api.mercadolibre.com/sites/MLB/search?q=computador`', async () => {
    await fetchProducts('computador')  
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('a função fetchProducts com o argumento `computador` deve ser igual ao ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  });

  it('deve retornar `You must provide an url` caso não receba argumento', async () =>{
  ;
  expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
