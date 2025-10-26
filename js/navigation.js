function navigationSticky() {
    const nav = document.querySelector('.header__navbar');

    // Create a sentinel element at the top of the page
    const sentinel = document.createElement('div');
    sentinel.style.height = '100vh'; // Adjust this - how far to scroll before changing
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
                console.log('Scrolled class added!');
            } else {
                nav.classList.remove('scrolled');
                console.log('Scrolled class removed!');
            }
        });
    }, {
        threshold: 0
    });

    observer.observe(sentinel);
}

function setActivePage() {
    //Get the name of the current page filename (e.g. index, about)
    const currentPage = window.location.pathname.split('/').pop();
    //Debug
    console.log('Current page:', currentPage);

    //Get all menu links (navbar destinations)
    const menuLinks = document.querySelectorAll('.header__menu li a');
    console.log('menu list:', menuLinks);

    menuLinks.forEach(function (link) {

        const linkHref = link.getAttribute('href');
        console.log('linkHref:', linkHref);

        link.classList.remove('--active');


        if (linkHref === './' + currentPage ||
            linkHref === currentPage ||
            (currentPage === 'index.html' && linkHref === './index.html') ||
            (currentPage === '' && linkHref === './index.html')) {
            // Add active class to the link itself
            link.classList.add('--active');
            console.log('Active page set:', linkHref);
        }


    })

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