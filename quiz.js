function checkAnswer() {
    // Step 1: Correct answer
    const correctAnswer = "4";

    // Step 2: Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 3: Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
