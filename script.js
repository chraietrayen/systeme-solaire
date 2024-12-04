// Contient les réponses correctes
const correctAnswers = ['Mercury', 'Mars', 'Jupiter', 'Jupiter', 'Saturn'];

function submitQuiz() {
  const form = document.getElementById('quiz-form');
  const results = document.getElementById('quiz-results');
  let score = 0;
  const totalQuestions = 5;

  // Réinitialiser les classes
  const resetClasses = () => {
    const labels = form.querySelectorAll('label');
    labels.forEach(label => {
      label.classList.remove('correct', 'incorrect');
    });
  };

  resetClasses();

  // Boucle pour chaque question et vérification des réponses
  for (let i = 1; i <= totalQuestions; i++) {
    const question = form['q' + i];
    let answered = false;

    for (let j = 0; j < question.length; j++) {
      if (question[j].checked) {
        answered = true;
        if (question[j].value === correctAnswers[i - 1]) {
          score++;
          question[j].parentElement.classList.add('correct');
        } else {
          question[j].parentElement.classList.add('incorrect');
        }
      }
    }

    // Ajouter la classe correct à la bonne réponse
    for (let j = 0; j < question.length; j++) {
      if (question[j].value === correctAnswers[i - 1]) {
        question[j].parentElement.classList.add('correct');
      }
    }
  }

  // Affichage des résultats
  results.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
}
