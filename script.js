AOS.init();

const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');

let index = 0;

function updateCarousel() {
  images.forEach(img => {
    img.classList.remove('active', 'left', 'right');
    img.style.opacity = "0";
  });

  const prev = (index - 1 + images.length) % images.length;
  const next = (index + 1) % images.length;

  images[index].classList.add('active');
  images[prev].classList.add('left');
  images[next].classList.add('right');

  images[index].style.opacity = "1";
  images[prev].style.opacity = "1";
  images[next].style.opacity = "1";
}

/* clique nas imagens */
images.forEach((img, i) => {
  img.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
});

/* setas */
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

/* inicia */
updateCarousel();