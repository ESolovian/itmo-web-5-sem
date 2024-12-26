document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach(swiper => {
        new Swiper(swiper, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
        });
    });
});