var inquirer = require("inquirer");
var clozeQuestions = require("./cloze-questions.json")
var count = 0;
var correctCount = 0;
// var input = process.argv[2];

function ClozeCard (text, cloze) {
    this.text = text;
    this.cloze =cloze;
}

var askQuestions = function() {
    if (count < clozeQuestions.length) {
        var replace = clozeQuestions[count].fullText.replace(clozeQuestions[count].clozeDeletion, "...");
        inquirer.prompt([{
        type: "input",
        name: "question",
        message: replace}])
        .then(function (answers) {
            var input = answers.question.toLowerCase();

         if (input === clozeQuestions[count].clozeDeletion){
            console.log("Correct! The answer is: " + clozeQuestions[count].clozeDeletion);
            correctCount++;


        } else {
            console.log("Wrong! " + "The right answer is: " + clozeQuestions[count].clozeDeletion);

        }
        count++;
        askQuestions();
        });

    } else {
        console.log("All questions aswered");
        console.log("You answered: " + correctCount + " questions correctly.");
        inquirer.prompt([
            {
            type: "confirm",
            message: "Do you want to play again?",
            name: "replay",
            default: true
            }
        ]).then(function(answer) {

            if (answer.replay === true) {
                count = 0;
                correctCount = 0;
                askQuestions();
            } else {
                console.log("Thanks for playing!");
            }
        });
    }
}

askQuestions();
module.exports = ClozeCard;
