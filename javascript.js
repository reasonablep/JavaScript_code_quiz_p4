let startGameButton = document.querySelector('.start-game-button');
let quizContainer = document.getElementById('quiz');
let nextButton = document.querySelector('.next-button');
let submitButton = document.getElementById('submit-button');

let quizQuestions = [


    {

        question: "Q1 - What is the opening tag for an array?",
        answers: {
            a: "[",
            b: "(",
            c: "/",
            d: "<"
        },

        correctAnswer: 'a'

    },

    {
        question: "Q2 - What is the HTML tag for linking a JavaScript file?",
        answers: {
            a: "link",
            b: "style",
            c: "src",
            d: "script"
        },

        correctAnswer: 'd'

    },

    {

        question: "Q3 - What is the proper way to call a JavaScript function?",
        answers: {
            a: ';',
            b: '[]',
            c: '<>',
            d: '()',

        },

        correctAnswer: 'd'

    },

    {

        question: "Q4 - What is the symbol for utilizing JQUERY in JavaScript?",
        answers: {
            a: "+",
            b: "&",
            c: "$",
            d: "#"

        },

        correctAnswer: 'c'

    },

    {


        question: "Q5 - What is the function of .length?",
        answers: {
            a: "It returns the number of elements in an array or object",
            b: "It styles the length of an element",
            c: "It takes an argument, which increases the length of an array or obect by 1",
            d: "It looks nice"

        },

        correctAnswer: 'a'

    },

    {

        question: "Q6 - The arguments in a for loop are, ",
        answers: {
            a: "i=;, i><;, i+-",
            b: "(elementName)",
            c: "Variables",
            d: "i><; and i+"

        },

        correctAnswer: 'a'

    },

    {

        question: "Q7 - An example of a boolean is,",
        answers: {
            a: "A string of numbers",
            b: "Letters in quotation marks",
            c: "An array of objects",
            d: "A true or false value"

        },

        correctAnswer: 'd'

    },

    {

        question: "Q8 - What is an example of a truthy value?",
        answers: {
            a: "0",
            b: "Infinity",
            c: "true == false",
            d: "null"

        },

        correctAnswer: 'd'

    }

];

let questionIndex = 0;
let correctCounter = 0;

function renderQuestion() {

    const currentQuestion = quizQuestions[questionIndex]

    if (currentQuestion !== undefined) {
        quizContainer.textContent = '';


        let questionEl = document.createElement('div');
        questionEl.textContent = currentQuestion.question;
        quizContainer.append(questionEl);

        const correctAnswer = currentQuestion.correctAnswer;
        console.log(correctAnswer);

        Object.keys(currentQuestion.answers).forEach(function (choice) {

            const answerEl = document.createElement('div');
            const userInput = document.createElement('input');



            userInput.type = 'radio';
            userInput.name = 'answer';
            userInput.classList.add('answer');
            userInput.value = choice;

            const answerContainer = document.getElementById('quiz-form');
            answerContainer.appendChild(userInput);

            answerEl.appendChild(userInput);
            answerEl.appendChild(document.createTextNode(`${choice}: ${currentQuestion.answers[choice]}`));
            quizContainer.append(answerEl);
            console.log(userInput.value);


            userInput.addEventListener('change', function() {
                if (userInput.value === correctAnswer) {
                    localStorage.setItem(`question_${questionIndex+ 1}_correct_answer`, correctAnswer)
                    correctCounter++
                    console.log(correctCounter);

                }
            });

            });



        nextButton.textContent = 'Next';
        submitButton.disabled = true;

    } else {

        let quizResults = document.createElement('div');
        quizResults.textContent = 'Number Correct = '+ correctCounter+ 'of 8';
        quizContainer.append(quizResults);

        nextButton.textContent = 'Thanks for playing!';
        nextButton.disabled = true;
    }
}

nextButton.addEventListener('click', function () {
    questionIndex++;
    renderQuestion();

});

function startQuiz() {
    questionIndex = 0;
    renderQuestion();
}

startGameButton.addEventListener('click', startQuiz);
