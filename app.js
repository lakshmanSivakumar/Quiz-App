const correctAnswers = ['A','A','A','A'];
const scorePara = document.querySelector('.score');
const span = document.querySelector('span');
const form = document.querySelector('form');

form.addEventListener('submit', checkAnswers);

function checkAnswers (e) {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    let score = 0, output = 0;

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    scorePara.style.display = 'block';
    scrollTo(0,0);
    let timer = setInterval(() => {
        span.innerText = `Your know about me like ${output}%`;
        if(output === score) {
            clearInterval(timer);
        }
        output++; 
    }, 10);
}