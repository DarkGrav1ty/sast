// Footer year
(function setYear() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear();
})();

// Gallery carousel data
const gallerySlides = [
  {
    src: "images/sast1.jpg",
    caption: "SAST patrol unit staged for a traffic stop."
  },
  {
    src: "images/sast2.jpg",
    caption: "Troopers assembled at headquarters before going 10-8."
  },
  {
    src: "images/sast3.jpg",
    caption: "Night shift units covering the interstate."
  }
];

// Simple gallery logic
(function initGallery() {
  const img = document.getElementById("galleryImage");
  const caption = document.getElementById("galleryCaption");
  const prevBtn = document.getElementById("galleryPrev");
  const nextBtn = document.getElementById("galleryNext");

  if (!img || !caption || !prevBtn || !nextBtn || gallerySlides.length === 0) {
    return;
  }

  let index = 0;

  function renderSlide() {
    const slide = gallerySlides[index];
    img.src = slide.src;
    img.alt = slide.caption;
    caption.textContent = slide.caption;
  }

  prevBtn.addEventListener("click", function () {
    index = (index - 1 + gallerySlides.length) % gallerySlides.length;
    renderSlide();
  });

  nextBtn.addEventListener("click", function () {
    index = (index + 1) % gallerySlides.length;
    renderSlide();
  });

  // initial render
  renderSlide();
})();