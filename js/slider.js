// slider.js

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Função para mostrar o slide e definir a imagem de fundo
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      // Define a imagem de fundo a partir do atributo data-bg
      slide.style.backgroundImage = `url('${slide.getAttribute("data-bg")}')`;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Inicia o slider mostrando o primeiro slide
showSlide(currentSlide);

