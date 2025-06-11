function checkAnswer() {
    let correctAnswer = "4";
    let selectedRadio = document.querySelector('input[name="quiz"]:checked');

  if(selectedRadio) {
    let userAnswer = selectedRadio.value;

    let feedback = document.getElementById('feedback');
    

    if(userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
    } else {
            feedback.textContent = "That's incorrect. Try again!"
    }

  } else {
    let feedback = document.getElementById('feedback');
    feedback.textContent = "Please select an answer before submitting"


   }

}

const submit = document.getElementById('submit-answer');
submit.addEventListener('click', checkAnswer);