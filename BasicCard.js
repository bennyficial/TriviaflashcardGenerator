var inquirer = require("inquirer");
var questions = require("./basic-questions.json")
var count = 0;
var correctAnswerCount = 0;
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



var askQuestion = function() {
    if (count < questions.length) {
        inquirer.prompt([{
        type: "input", 
        name: "question",  
        message: questions[count].frontCard}])
        .then(function (answers) {
            var input = answers.question.toLowerCase();
            
         if (input === questions[count].backCard){
            console.log("Correct! The answer is: " + questions[count].backCard);
            correctAnswerCount++;
            
            
        } else {
            console.log("INVALID! " + "The right answer is: " + questions[count].backCard);
            
        }
        count++;
        askQuestion();
            // console.log(count);
        });
        // console.log(cards);
        // count++;
        // console.log(count);
    } else {
        console.log("All questions aswered");
        console.log("You answered: " + correctAnswerCount + " questions correctly.");
    }
}

askQuestion();
// module.exports = BasicCard;



