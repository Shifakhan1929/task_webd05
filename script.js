const buttons = document.querySelectorAll('#filter-buttons button');
const items = document.querySelectorAll('#items-grid .item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
