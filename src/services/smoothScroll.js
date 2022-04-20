export default function scrollSmooth() {
  // const { height: cardHeight } = document
  //   .querySelector('#root')
  //   .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: document.body.clientHeight,
    behavior: 'smooth',
  });
}
