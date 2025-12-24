const icons = document.querySelectorAll(".iconPlus");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const description = icon.nextElementSibling;

    // Alterna a classe 'active' para animação
    description.classList.toggle("active");

    // Gira o ícone
    if (description.classList.contains("active")) {
      icon.style.transform = "rotate(45deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  });
});
