import vars from '../_vars.js';

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(document.documentElement.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  document.documentElement.style.paddingRight = '0px';

  document.documentElement.style.top = 'auto';
  document.documentElement.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  document.documentElement.removeAttribute('data-position');
  document.documentElement.style.scrollBehavior = 'smooth';
}
