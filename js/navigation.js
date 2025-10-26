function navigationSticky() {
    //Get all navbar items and logo img
    const nav = document.querySelector('.header__navbar');
    const logo = document.querySelector('.header__logo img');

    // Create a sentinel element at the top of the page
    const sentinel = document.createElement('div');
    sentinel.style.height = '100vh'; // Scroll length
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.width = '100%';
    document.body.prepend(sentinel);

    // Create the observer
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            // If scrolled past the sentinel (not visible)
            if (!entry.isIntersecting) {
                nav.classList.add('scrolled');
                console.log('Added scroll class');
                logo.src = './images/logo/snickarohman--burgundy-light.png';
            } else {
                // Reset - remove scrolled class and revert to old logo src
                nav.classList.remove('scrolled');
                console.log('Removed scroll class');
                logo.src = './images/logo/snickarohman--creme.png';
            }
        });
    }, {
        threshold: 0
    });

    observer.observe(sentinel);
}

function setActivePage() {
    /* Get the name of the current page filename (e.g. index, about)
    * Split divides the string at the '/' character, pop() removes the last element
    */
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Current page:', currentPage);

    // Get all menu links (navbar destinations)
    const menuLinks = document.querySelectorAll('.header__menu li a');

    menuLinks.forEach(function (link) {
        const linkHref = link.getAttribute('href');

        // Reset / remove old active page marker
        link.classList.remove('--active');

        /*  Checks if the HTMl link and current page matches
        *  e.g. <a href="./about.html"> should match about.html
        *  also checks for empty link value (homescreen)
        */
        if (linkHref === './' + currentPage ||
            linkHref === currentPage ||
            (currentPage === 'index.html' && linkHref === './index.html') ||
            (currentPage === '' && linkHref === './index.html')) {
            // Add active class to the link itself
            link.classList.add('--active');
            console.log('Active page set:', linkHref);
        }
    });
}

function navigationHover() {
    //Get all menu item links (except the section link button)
    const navLinks = document.querySelectorAll('.header__menu-item a');

    navLinks.forEach(function (link) {
        link.onmouseover = function () {
            this.style.color = 'var(--primary100)';
            this.style.transition = 'color 0.3s ease';
        };

        link.onmouseout = function () {
            this.style.color = '';
        };
    });
}

window.onload = function () {
    navigationSticky();
    setActivePage();
    navigationHover();
}