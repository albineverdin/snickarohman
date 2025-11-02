// Variable for slide image
let slideIndex = 0;

// Initially load first indexed image
document.addEventListener('DOMContentLoaded', function () {
    showSlide(0);
});

function showSlide(index) {
    let slides = document.querySelectorAll('.slideshow__slide');

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Reset / Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show current indexed slide
    slides[slideIndex].style.display = 'block';
}


function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function previousSlide() {
    slideIndex--;
    showSlide(slideIndex);
}