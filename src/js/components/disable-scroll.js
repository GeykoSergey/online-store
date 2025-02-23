import vars from '../_vars.js';

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  console.log(pagePosition);
  const paddingOffset = `${(window.innerWidth - document.documentElement.offsetWidth)}px`;

  vars.htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  document.documentElement.style.paddingRight = paddingOffset;
  document.documentElement.classList.add('dis-scroll');
  document.documentElement.dataset.position = pagePosition;
  document.documentElement.style.top = `-${pagePosition}px`;

  console.log(paddingOffset);
}
