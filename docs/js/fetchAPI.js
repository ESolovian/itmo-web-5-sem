document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const reviewsContainer = document.getElementById("reviews-container");
    const errorMessage = document.getElementById("error-message");

    async function loadReviews() {
        try {
            reviewsContainer.innerHTML = "";
            const randomId = 1 + Math.floor(Math.random() * 100);
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + randomId);
            if (!response.ok) {
                throw new Error("Network response not ok");
            }

            const data = await response.json();
            preloader.style.display = 'none';
            displayReviews(data);
        } catch (error) {
            preloader.style.display = 'none';
            errorMessage.style.display = 'block';
            console.error("Ошибка:", error);
        }
    }

    function displayReviews(reviews) {
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            const titleElement = document.createElement('h3');
            titleElement.textContent = review.name;

            const bodyElement = document.createElement('p');
            bodyElement.textContent = review.body;

            reviewElement.appendChild(titleElement);
            reviewElement.appendChild(bodyElement);
            reviewsContainer.appendChild(reviewElement);
        });
    }

    loadReviews();
});