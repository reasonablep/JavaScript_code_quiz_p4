let displayEl = $('#display');
let startGameButton = $('#start-game-btn');
let quizQuestions = $('#questions');


    function quizQuestions ()
        let questions = [ {

            "Q1: What is the opening tag for an array?", 
            const answers {
                a: "[",
                b: "(",
                c: "/",
                d: "<"
            };
            const correctAnswer{'a'}

        },
    
        {
            Q2: "What is the HTML tag for linking a JavaScript file?",
            answers {
                a: "link",
                b: "style",
                c: "src",
                d: "script"
            },
    
            correctAnswer: 'd'
    
        },
    
        {
    
            Q3: "What is the proper way to call a JavaScript function?",
            answers: {
                a: ';',
                b: '[]',
                c: '<>',
                d: '()',
    
            },
    
            correctAnswer: 'd'
    
            },
    
            {
    
        Q4: "What is the symbol for a JQUERY in JavaScript?",
            answers: {
            a: "+",
            b: "&",
            c: "$",
            d: "#"
    
            },
    
            correctAnswer: 'c'
    
            },
    
            {
    
    
            Q5: "What is the function of .length?",
            answers: {
                a: "It returns the number of elements in an array or object",
                b: "It styles the length of an element",
                c: "It takes an argument, which increases the length of an array or obect by 1",
                d: "It looks nice"
    
            },
    
            correctAnswer: 'a'
    
        },
    
        { 
    
            Q6: "The arguments in a for loop are, ",
            answers: {
                a: "i=;, i><;, i+-",
                b: "(elementName)",
                c: "Variables",
                d:"i><; and i+"
    
            },
    
            correctAnswer: 'a'
    
        },
    
        {
    
            Q7: "An example of a boolean is,"
            answers: {
                a: "A string of numbers",
                b: "Letters in quotation marks",
                c: "An array of objects",
                d:"A true or false value"
    
            },
    
            correctAnswer: 'd'
    
        },
    
        {
    
            Q8: "What is an example of a truthy value?",
            answers: {
                a: "0",
                b: "Infinity",
                c: "true == false",
                d:"null"
    
            },
    
            correctAnswer: 'd'
    
        }

        startGameButton.on('click', '<div>', function (event){

            let startGameBtn = $('<div>');
        
            startGameButton.addClass('button');
        
            startGameButton.text($(event.target).attr('data-question'));
        
            startGameButton.text(quizQuestions, "Let's start the game!");
        
            startGameBtn();
        }