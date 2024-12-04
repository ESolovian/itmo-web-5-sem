document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const feedbackContainer = document.getElementById("feedbackContainer");

    const feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];
    feedbackData.forEach((feedbackElement) => {generateFeedback(feedbackElement.game, feedbackElement.feedback);});

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const game = document.getElementById("game").value;
        const feedback = document.getElementById("feedback").value;

        generateFeedback(game, feedback);
        saveFeedback(game, feedback);
        form.reset()
    });

    function generateFeedback(game, feedback) {
        const feedbackElement = document.createElement("article");
        feedbackElement.classList.add("feedback");
        const feedbackElementGame = document.createElement("h3");
        feedbackElementGame.textContent = game;
        const feedbackElementText = document.createElement("p");
        feedbackElementText.textContent = feedback;
        feedbackElement.appendChild(feedbackElementGame);
        feedbackElement.appendChild(feedbackElementText);

        feedbackContainer.appendChild(feedbackElement);
    }

    function saveFeedback(game, feedback) {
        feedbackData.push({game, feedback});
        localStorage.setItem("feedback", JSON.stringify(feedbackData));
    }
});