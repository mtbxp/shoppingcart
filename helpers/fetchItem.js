// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

const buttonsToAdd = document.querySelectorAll('item__add');

const fetchItem = (event) => {
  console.log(event.target);
};

buttonsToAdd.addEventListener('click', fetchItem(event));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
