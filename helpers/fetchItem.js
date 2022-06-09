const fetchItem = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
} catch (error) {
    return error;
  }
};

// Exercício revisado e corrigido pelos colegas Paulo Rubio, William Portella e Carla Uyemura na sala de estudos.

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
