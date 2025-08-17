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

    // About Us card scroll reveal
    const card = document.querySelector("#aboutUsCard");
    if (card) {
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
    }

    // Expose menu functions globally
    window.openMenu = openMenu;
    window.closeMenu = closeMenu;
    window.toggleSearch = toggleSearch;

    // ✅ Carousel functionality
    const myCarousel = document.getElementById('carouselExampleControls');
    const tabs = document.querySelectorAll('.carousel-tabs span');

    if (myCarousel && tabs.length > 0) {
        myCarousel.addEventListener('slid.bs.carousel', function (event) {
            const activeIndex = event.to;

            // Remove zoom from all tabs
            tabs.forEach(tab => tab.classList.remove('zoom-active'));

            // Add zoom to active tab
            const activeTab = document.querySelector(`.carousel-tabs span[data-tab="${activeIndex}"]`);
            if (activeTab) activeTab.classList.add('zoom-active');
        });

        // ✅ Add click listener for manual tab selection
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Move carousel to clicked tab
                const carousel = bootstrap.Carousel.getInstance(myCarousel);
                carousel.to(index);

                // Update zoom
                tabs.forEach(t => t.classList.remove('zoom-active'));
                tab.classList.add('zoom-active');
            });
        });

        // Initial zoom for first tab
        tabs[0].classList.add('zoom-active');
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
