require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const site = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
test('Teste se fetchProducts é uma função', () => {
  expect(fetchProducts).toBeDefined();
});
test('Executa a função fetchProducts com o argumento computador e testa se fetch foi chamada', async () => {
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled();
});
test('Ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
});  
test('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () =>
{
  expect(await fetchProducts('computador')).toEqual(computadorSearch);
});
it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch',async () => 
{
  const result = await fetchProducts('computador');
  expect(result).toBe(computadorSearch);
});
it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => 
{
  try {
  await fetchProducts();
  } catch (erro) {
  expect(error).toEqual(new Error('You must provide an url'));
  }
});
// fail('Teste vazio');
});

