const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

function formatarTelefone(numero) {
  numero = numero.replace(/\D/g, "");

  if (numero.length === 11) {
    return numero.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  if (numero.length === 10) {
    return numero.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  return numero;
}

document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".number");

  numbers.forEach((n) => {
    const texto = n.textContent.trim();
    const formatado = formatarTelefone(texto);
    n.textContent = formatado;
  });
});
