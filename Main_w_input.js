var BasicCard = require('./someBasic.js');
var inquirer = require('inquirer');
var i = 0;
var correctAnswers = 0;

var question = new BasicCard();

var z = 0;
var userQuestion = function(){
    if(z<1){
        inquirer.prompt([
            {
                type: 'input',
                name: 'frontOfCard',
                message: 'What is on the front'
            },
            {
                type: 'input',
                name: 'backOfCard',
                message: 'What is on the back'
            },
            {
                type: "confirm",
                message: "Do you want to create one more?",
                name: "confirm",
                default: true
            }

        ]).then(function(ask){
            question.combine(ask.frontOfCard, ask.backOfCard);
            if (!ask.confirm){
                z++;
            }
            userQuestion();
        });
    } else {
        console.log('Okay! its time to play your game');
        askQuestion();
    }
}

userQuestion();

var askQuestion =  function(){
    if (i <= z){
        inquirer.prompt([
            {
                type: 'input',
                name: 'question',
                message: question.combinedCards[i].newFront  
            }
        ]).then(function (answers) {

            var input = answers.question;
            //change this variable to get the index
            var card = question.combinedCards[i];

            if(input === card.newBack){
                console.log('Yay ! '+ card.newBack + ' was the answer.');
               correctAnswers++;
            } else {
                console.log('Sorry the correct answers was ' + card.newBack);
            }
            i++;
            askQuestion();
        });
    } else {
        console.log('\n'+'All Questions answered' +
        '\nYou answered ' + correctAnswers + ' correctly');
    }
}