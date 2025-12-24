const icons = document.querySelectorAll(".iconPlus");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const description = icon.nextElementSibling;

    if (description.style.display === "block") {
      description.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    } else {
      description.style.display = "block";
      icon.style.transform = "rotate(45deg)";
    }
  });
});
