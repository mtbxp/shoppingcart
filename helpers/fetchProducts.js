const fetchProducts = async (item) => {
      // seu código 
      
        const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
        if (item === undefined) {
          return 'You must provide an url';
        }
        const response = await fetch(url);
        const data = await response.json();

        return data;
};

      if (typeof module !== 'undefined') {
        module.exports = {
          fetchProducts,
        };
      }