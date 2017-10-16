# TriviaflashcardGenerator

### Objective
Create the backend for a basic flashcard application. The backend will essentially constitute an API that allows users to create two types of flashcards:
* Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").
* Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

### Specifications

* Create a new file named `BasicCard.js`:

  * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
    `module.exports = BasicCard;`

  * The constructor should accept two arguments: `front` and `back`.

  * The constructed object should have a `front` property that contains the text on the front of the card.

  * The constructed object should have a `back` property that contains the text on the back of the card.

* Create a new file named `ClozeCard.js`:

  * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
    `module.exports = ClozeCard;`

  * The constructor should accept two arguments: `text` and `cloze`.

  * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

  * The constructed object should have a `partial` property that contains _only_ the partial text.

  * The constructed object should have a `fullText` property that contains _only_ the full text.

  * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

  * Use prototypes to attach these methods, wherever possible.

The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.

### Examples

The constructors should work as follows.

```
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
```
