require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
 it ("Testa se a função fetchProducts é uma função", () => {
 expect(typeof fetchProducts).toBe('function');
 });

 it ("Testa se a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada", async () => {
  const dataResult = await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled(); 
  });

 it ("Testa se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint correto", async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const dataResult = await fetchProducts('computador');
  expect(fetch).toBeCalledWith(url);
 });

 it ("Testa se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch", async () => {
  const dataResult = await fetchProducts('computador');
  expect(dataResult).toEqual(computadorSearch); 
 });

 it ("Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
  //await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  try {
    await fetchProducts();
  } catch (error) { 
    expect(error).toEqual(new Error('You must provide an url'));
  }
 });
 
});
