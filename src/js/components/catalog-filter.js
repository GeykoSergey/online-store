const filter = document.querySelector('.filter');
const filterBtnOpen = document.querySelector('.filter-btn__open');
const filterBtnsClose = document.querySelectorAll('.filter-btn__close');

if (filter && filterBtnOpen) {
  filterBtnOpen.addEventListener('click', function () {
    filter.classList.add('open');
    filterBtnOpen.style.display = 'none';
  });

  filterBtnsClose.forEach((el) => {
    el.addEventListener('click', function () {
      filter.classList.remove('open');
      filterBtnOpen.style.display = 'block';
    });
  });
}