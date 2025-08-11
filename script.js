document.addEventListener('DOMContentLoaded', () => {
    // Menu overlay functions
    function openMenu() {
        const menu = document.getElementById('menuOverlay');
        if (menu) menu.classList.add('active');
    }

    function closeMenu() {
        const menu = document.getElementById('menuOverlay');
        if (menu) menu.classList.remove('active');
    }

    function toggleSearch() {
        const menu = document.getElementById('searchOverlay');
        if (menu) menu.classList.toggle('active');
    }


    document.addEventListener("DOMContentLoaded", function () {
        const card = document.querySelector("#aboutUsCard");

        function revealOnScroll() {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.85) {
                card.classList.add("visible");
                window.removeEventListener("scroll", revealOnScroll);
            }
        }

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    });





    // Expose menu functions globally if needed elsewhere
    window.openMenu = openMenu;
    window.closeMenu = closeMenu;
    window.toggleSearch = toggleSearch;

    // Carousel tab sync
    const carousel = document.querySelector('#carouselExampleControls');
    if (carousel) {
        const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);

        // On tab click
        window.showSlide = function (index) {
            bsCarousel.to(index);
        };

        // On slide change, highlight the correct tab
        carousel.addEventListener('slid.bs.carousel', function (e) {
            const tabs = document.querySelectorAll('.carousel-tabs .tab');
            tabs.forEach((tab, idx) => {
                tab.classList.toggle('active', idx === e.to);
            });
        });
    }

    // Fade-up and Slide-in animations using IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-up');
    const slideElements = document.querySelectorAll('.slide-text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
    slideElements.forEach(el => observer.observe(el));

    // Search overlay toggle
    const searchBtn = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener("click", () => {
            searchOverlay.classList.toggle("active");
        });
    }
});
