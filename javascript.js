let startGameButton = document.querySelector('.start-game-button');
let quizContainer = document.getElementById('quiz');
let quizForm = document.getElementById('quiz-form');

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
                d:"i><; and i+"
    
            },
    
            correctAnswer: 'a'
    
        },
    
        {
    
                question: "Q7 - An example of a boolean is,",
                answers: {
                a: "A string of numbers",
                b: "Letters in quotation marks",
                c: "An array of objects",
                d:"A true or false value"
    
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

        function renderQuestion () {

            const currentQuestion = quizQuestions[questionIndex]

            if (currentQuestion) {
            quizContainer.textContent = '';

            
            let questionEl = document.createElement('div');
            questionEl.textContent = currentQuestion.questions;
            quizContainer.append(questionEl);
        

            }
        }

            // for (let i=0; i< quizQuestions.length; i++) {

            // let questionEl = document.createElement('div');
            // questionEl.textContent = quizQuestions[i].question;
            // quizContainer.append(questionEl);

    //         let answersArr = Object.values(quizQuestions[i].answers);
    //         answersArr.forEach(function (answerText) {
    //             let answerEl = document.createElement('div');
    //             answerEl.textContent = answerText;
    //             quizContainer.append(answerEl);

    //         });
    
    //         let correctEl = quizQuestions[i].correctAnswer;
    //         quizContainer.append(correctEl);
         
    //     }
    // };

    startGameButton.addEventListener('click', renderQuestion);
