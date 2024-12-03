(function() {
    window.addEventListener('load', function() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.querySelector('.footer');
        if (footer) {
            const div = document.createElement('div');
            div.textContent = `Время загрузки страницы: ${loadTime / 1000} секунд`;
            footer.appendChild(div);
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav__link');
        const currentPage = window.location.pathname.split('/').pop();
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    });
})();