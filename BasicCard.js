var inquirer = require("inquirer");
var basicQuestions = require("./basic-questions.json")
var count = 0;
var correctCount = 0;
// var input = process.argv[2];

function BasicCard (front, back) {
    this.front = front;
    this.back =back;
}

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");
// // "Who was the first president of the United States?"
// console.log(firstPresident.front);

// // "George Washington"
// console.log(firstPresident.back);

var askQuestions = function() {
    if (count < basicQuestions.length) {

        inquirer.prompt([
            {
            type: "input",
            name: "question",
            message: basicQuestions[count].frontCard}
        ]).then(function (answers) {
            var input = answers.question.toLowerCase();

         if (input === basicQuestions[count].backCard){
            console.log("Correct! The answer is: " + basicQuestions[count].backCard);
            correctCount++;

        } else {
            console.log("Wrong! " + "The right answer is: " + basicQuestions[count].backCard);

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
};

askQuestions();
module.exports = BasicCard;
