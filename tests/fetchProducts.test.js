require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');


describe('1 - Teste a função fetchProducts', () => {
 it('Deve ser uma funcao', async() => {
   expect(typeof fetchProducts).toBe('function');
 })
 it('Deve receber o argumento computador e verifica se Fetch foi chamada', async () => {
   await fetchProducts('computador');
   expect(fetch).toHaveBeenCalled();

 })
 it('Deve receber o argumento computador e verifica se Fetch utiliza o endpoint', async () => {
   await fetchProducts('computador');
   const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
   expect(fetch).toHaveBeenCalledWith(url);
})

it('Deve receber o argumento computador é igual a estratura de dados do objeto computadorSearch', async () => {
  expect(typeof await fetchProducts('computador')).toEqual(typeof computadorSearch);
})

it('Deve retornar um erro, quando nao passado o argumento para a funcao FetchProducts', async () => {
  expect( await fetchProducts()).toEqual(new Error('You must provide an url'));
})
});
