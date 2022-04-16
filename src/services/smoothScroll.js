export default function scrollSmooth() {
  const { height: cardHeight } = document
    .querySelector('#root')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
