function submitQuiz() {
  const quizForm = document.getElementById('quiz-form');
  const resultsDiv = document.getElementById('quiz-results');
  let score = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  // Correct answers
  const answers = {
    q1: 'Mercury',
    q2: 'Mars',
    q3: 'Jupiter',
    q4: 'Jupiter',
    q5: 'Saturn'
  };

  // Reset previous results
  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.classList.remove('correct', 'incorrect');
  });

  // Check answers
  for (let question in answers) {
    const selectedOption = quizForm.elements[question].value;
    const options = quizForm.elements[question];

    if (selectedOption === answers[question]) {
      score++;
      correctAnswers++;
      options.forEach(option => {
        if (option.value === selectedOption) {
          option.parentElement.classList.add('correct');
        }
      });
    } else {
      incorrectAnswers++;
      options.forEach(option => {
        if (option.value === selectedOption) {
          option.parentElement.classList.add('incorrect');
        }
        if (option.value === answers[question]) {
          option.parentElement.classList.add('correct');
        }
      });
    }
  }

  // Display results
  resultsDiv.innerHTML = `
    <p>You scored ${score} out of ${Object.keys(answers).length}</p>
    <p>Correct Answers: ${correctAnswers}</p>
    <p>Incorrect Answers: ${incorrectAnswers}</p>
  `;
}
