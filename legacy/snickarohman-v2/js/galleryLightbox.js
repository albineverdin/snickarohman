







/*  Gets every image from the gallery
 *  Also gets the hidden overlay div with the empty overlay img and close button
 */
const galleryItems = document.querySelectorAll('.gallery__img img');
const overlay = document.getElementById('galleryOverlay');
const overlayImg = document.getElementById('overlayImg');
const closeBtn = document.getElementById('closeButton');

// Add click event to each gallery image
galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        overlayImg.src = this.src;
        overlayImg.alt = this.alt;
        overlay.classList.add('active');
    });
});

// Close overlay when clicking the close button
closeBtn.addEventListener('click', function () {
    overlay.classList.remove('active');
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});

// Close overlay with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    }
});