function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

function renderQuestion(questions, quizContainer) {

    let quizQuestions = [
        {
            Q1: "What is the opening tag for an array?", 
            Answers: {
                a. "[",
                b. "(",
                c. "/",
                d. "<"
            },
            correctAnswer: 'a'
        },
    
        {
            Q2: "What is the HTML tag for linking a JavaScript file?",
            Answers: {
                a. "link",
                b. "style",
                c. "src",
                d. "script"
            },
    
            correctAnswer: 'd'
    
        },
    
        {
    
            Q3: "What is the proper way to call a JavaScript function?",
            Answers: {
                a. ';',
                b. '[]',
                c. '<>',
                d. '()',
    
            },
    
            correctAnswer: 'd'
    
            },
    
            {
    
        Q4: "What is the symbol for a JQUERY in JavaScript?",
            Answers: {
            a. "+",
            b. "&",
            c. "$",
            d. "#"
    
            },
    
            correctAnswer: 'c'
    
            },
    
            {
    
    
            Q5: "What is the function of .length?",
            Answers: {
                a. "It returns the number of elements in an array or object",
                b. "It styles the length of an element",
                c. "It takes an argument, which increases the length of an array or obect by 1",
                d. "It looks nice"
    
            },
    
            correctAnswer: 'a'
    
        },
    
        { 
    
            Q6: "The arguments in a for loop are, ",
            Answers: {
                a. "i=;, i><;, i+-",
                b. "(elementName)",
                c. "Variables",
                d. "i><; and i+"
    
            },
    
            correctAnswer: 'a'
    
        },
    
        {
    
            Q7: ,
            Answers: {
                a. "link",
                b. "style",
                c. "src",
                d. "script"
    
            },
    
            correctAnswer: 'd'
    
        },
    
        {
    
            Q8: "What is the HTML tag for linking a JavaScript file?",
            Answers: {
                a. "link",
                b. "style",
                c. "src",
                d. "script"
    
            },
    
            correctAnswer: 'd'
    
        },
    
        {
    
            Q9: "What is the HTML tag for linking a JavaScript file?",
            Answers: {
                a. "link",
                b. "style",
                c. "src",
                d. "script"
    
            },
    
            correctAnswer: 'd'
    
        },
    
        {
    
            Q10: "What is the HTML tag for linking a JavaScript file?",
            Answers: {
                a. "link",
                b. "style",
                c. "src",
                d. "script"
            },
            correctAnswer: 'd'
        }
    ];

    quizContainer.innerHTML = output.join('');

}

    for (let i=0; i < questions.length; i++) {

        userAnswer = [];
    
        for (letter in questions[i].Answers) {

            answers.push(
            '<div> <input type="button" name="question" value="letter">'
            );
            output.push(
            '<div class="question"></div>'
            );
        }}; 


    }

    addEventListener('click', renderQuestion (questions, quizContainer));

    

function showResults(questions, quizContainer, resultsContainer) {

    let resultsContainer = quizContainer.querySelectorAll('answers')

   let userAnswer= ''; 
   let correctCount = 0; 
}

for (let i=0; i<questions.length; i++) {

    userAnswer= (answerContainers[i].querySelector('input [name= question]:checked')); {
        if (userAnswer === questions[i].correctAnswer) {

            numCorrect++; 
            setItem (answerContainers);
        }
    }
}


submitButton.on('click') = function()


 