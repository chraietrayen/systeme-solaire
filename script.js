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
    const options = quizForm.elements[question];
    let answered = false;

    for (let option of options) {
      if (option.checked) {
        answered = true;
        if (option.value === answers[question]) {
          score++;
          correctAnswers++;
          option.parentElement.classList.add('correct');
        } else {
          incorrectAnswers++;
          option.parentElement.classList.add('incorrect');
        }
      }
    }

    // Mark unanswered questions: only correct answer in red
    if (!answered) {
      options.forEach(option => {
        if (option.value === answers[question]) {
          option.parentElement.classList.add('incorrect');
        }
      });
      incorrectAnswers++;
    } else {
      // Mark the correct answer
      options.forEach(option => {
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
