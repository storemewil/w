// Animasi scroll muncul satu per satu
const scrollElements = document.querySelectorAll('.animate-scroll');

const scrollInView = (el) => {
  const top = el.getBoundingClientRect().top;
  return top <= (window.innerHeight - 100);
};

const loopScroll = () => {
  scrollElements.forEach((el) => {
    if (scrollInView(el)) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', loopScroll);
window.addEventListener('load', loopScroll);
