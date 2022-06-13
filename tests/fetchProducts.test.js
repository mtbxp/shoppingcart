require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
 it (`'Testar se fetchProducts é uma função'`, () => {
  expect (typeof fetchProducts).toBe('function');
 } );
 it (`Execute a função com argumento 'computador' para retornar fetch`, async () => {
   await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled();
 });
 it (`Testar se o EndPoint está correto`, async () => {
   await fetchProducts('computador');
   const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  expect(fetch).toHaveBeenCalledWith(endpoint);
 });
 it (`Testar o retorno da função`, async () => {
   const receivedFor = await fetchProducts('computador');
  expect(receivedFor).toEqual(computadorSearch);
 });
 it (`Sem argumento retorna Error`, async () => {
   const noArgument = await fetchProducts();
  expect(noArgument).toEqual(new Error('You must provide an url'));
 });
});
