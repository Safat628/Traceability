// Dark Mode Toggle start
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark Mode Toggle start

// Back to Top Button Functionality start
const backToTop = document.querySelector(".back-to-top");

// Show the Back to Top button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// Custom easing function (ease-out for slow-to-fast effect)
function easeOutQuad(t) {
  return t * (2 - t);
}

// Smooth scroll to the top with easing
backToTop.addEventListener("click", () => {
  const start = window.scrollY;
  const duration = 800; // duration of the animation in milliseconds
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Normalize to a 0-1 range
    const easedProgress = easeOutQuad(progress);

    window.scrollTo(0, start * (1 - easedProgress));

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
});

// Back to Top Button Functionality end


// slider start

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.img-slider .slide');
  const prevBtn = document.querySelector('.img-slider .prev-btn');
  const nextBtn = document.querySelector('.img-slider .next-btn');
  let currentIndex = 0;
  const slideInterval = 10000; // 10 seconds

  // Initially show the first slide and hide others
  slides[0].style.display = 'block';
  slides[0].classList.add('active');

  // Show the next slide
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Show the previous slide
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Automatically switch slides after a few seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, slideInterval);

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.style.display = 'none';
      slide.classList.remove('active');
    });

    slides[index].style.display = 'block';
    slides[index].classList.add('active');
  }
});


// slider end







