$(document).ready(function () {

    // === BACK TO TOP BUTTON === //

    // Go back to top button when scrolling
    $(window).scroll(function () {

        var scrollPosition = $(this).scrollTop();

        // Breakpoint 300px, fade 400ms
        if (scrollPosition > 300) {
            $('.button__to-top').fadeIn(400);
        } else {
            $('.button__to-top').fadeOut(400);
        }
    });

    // Scroll back to top smoothly when button is clicked
    $('.button__to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });



    // === FAQ SECTION === //

    // Toggle FAQ 
    $(document).on('click', '.faq-question', function () {

        var answer = $(this).next('.faq-answer');

        answer.slideToggle(400);
    });

    // Manipulate FAQ icon
    $(document).on('click', '.faq-question', function () {
        var icon = $(this).find('.faq-icon');

        if (icon.hasClass('rotated')) {
            // Rotate back to upward position and change to original color
            icon.animate({ deg: 0 }, {
                duration: 400,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            });
            icon.css('color', 'var(--primary50)');
            icon.removeClass('rotated');
        } else {
            // Rotate to downwards position and change to darker color
            icon.animate({ deg: 180 }, {
                duration: 400,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            });
            icon.css('color', 'var(--text-dark50)');
            icon.addClass('rotated');
        }
    });
});