function openMenu() {
    const menu = document.getElementById('menuOverlay');
    if (menu) menu.classList.add('active');
}

function closeMenu() {
    const menu = document.getElementById('menuOverlay');
    if (menu) menu.classList.remove('active');
}

// Show specific slide when tab clicked
function showSlide(index) {
  const carousel = document.querySelector('#carouselExampleControls');
  const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
  bsCarousel.to(index);
}

// Sync active tab when carousel changes automatically
document.querySelector('#carouselExampleControls').addEventListener('slid.bs.carousel', function (e) {
  const tabs = document.querySelectorAll('.carousel-tabs .tab');
  tabs.forEach((tab, idx) => {
    tab.classList.toggle('active', idx === e.to);
  });
});



// Fade up animation on scroll
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => fadeObserver.observe(el));

function toggleSearch() {
    const searchOverlay = document.getElementById("searchOverlay");
    if (searchOverlay) {
        searchOverlay.classList.toggle("active");
    }
}