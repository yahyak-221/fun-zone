// Dark mode toggle
const toggleTheme = document.getElementById("toggle-theme");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// FAQ toggle with animation
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".ww-faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      if (answer.classList.contains("active")) {
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
        answer.classList.remove("active");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
        answer.classList.add("active");
      }
    });
  });
});

// Smooth slider (if used elsewhere)
const images = [
  "images/waffle1.jpg",
  "images/waffle2.jpg",
  "images/waffle3.jpg",
];
let index = 0;
const sliderImage = document.getElementById("slider-image");

function fadeOutIn(callback) {
  if (!sliderImage) return;
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    callback();
    sliderImage.style.opacity = 1;
  }, 300);
}

function showNextImage() {
  index = (index + 1) % images.length;
  fadeOutIn(() => {
    sliderImage.src = images[index];
  });
}

if (sliderImage) {
  sliderImage.style.transition = "opacity 0.9s ease";
  setInterval(showNextImage, 3000);
}
