var questions = require('./basic-questions.json');
var NewCards = require('./userCards.js');

function BasicCard(front, back, date){
    //getting the cards from the JSON file
    this.cards = questions;
    this.frontCard = front;
    this.backCard = back;
    this.date = Date(Date.now());
    //getting the card from user input
    this.combinedCards = [];
    this.combine = function(newFront, newBack){
        this.combinedCards.push(new NewCards(newFront, newBack));
    };
}

module.exports = BasicCard; 