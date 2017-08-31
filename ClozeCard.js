var inquirer = require("inquirer");
var questions = require("./cloze-questions.json")
var counter = 0;
var correctAnswercounter = 0;
// var input = process.argv[2];

function ClozeCard (text, cloze) {
    this.text = text;
    this.cloze =cloze;
}

// console.log(questions[0].fullText);
// console.log(questions[0].clozeDeletion);



// console.log(test);

// ClozeCard();


var askQuestion = function() {
    if (counter < questions.length) {
        var replace = questions[counter].fullText.replace(questions[counter].clozeDeletion, "...");
        inquirer.prompt([{
        type: "input",  
        name: "question",
        message: replace}])
        .then(function (answers) {
            var input = answers.question.toLowerCase();
            
         if (input === questions[counter].clozeDeletion){
            console.log("Correct! The answer is: " + questions[counter].clozeDeletion);
            correctAnswercounter++;
            
            
        } else {
            console.log("INVALID! " + "The right answer is: " + questions[counter].clozeDeletion);
            
        }
        counter++;
        askQuestion();
            // console.log(counter);
        });
        // console.log(cards);
        // counter++;
        // console.log(counter);
    } else {
        console.log("All questions aswered");
        console.log("You answered: " + correctAnswercounter + " questions correctly.");
    }
}

askQuestion();
// module.exports = ClozeCard;



