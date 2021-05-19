// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some Scrabble! \n")
};

let simpleScore = function (word){
    return word.length 
  };

let vowelBonusScore = function (word){
    word = word.toLowerCase();
    let vowelWorth = 0
    let nonVowel = 0 
    for (let i = 0; i < word.length; i++){
      if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"){
      vowelWorth = vowelWorth + 3;
      }else { 
        nonVowel = nonVowel + 1;
        }
      }
      return nonVowel + vowelWorth;
  }

let scrabbleScore = function (word){
word = word.toLowerCase();
let newScore = 0
for (let i = 0; i < word.length; i++){ 
  newScore = newScore + newPointStructure[word[i]];
}
return newScore;
};

	
const scoringAlgorithms = [ simpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
},
bonusVowels = { 
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
},
scrabble = {
  name : "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: scrabbleScore
}];

function scorerPrompt() { 
let userWord = input.question("Enter a word to score: ")
 console.log(`Which scoring algorithm would you like to use? \n`)

for (let i = 0; i < scoringAlgorithms.length; i++){
  console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
}
let userInput = Number(input.question(`Enter 0, 1 or 2: `));
 if (userInput === 0){
   console.log(`Your score for ${userWord} is: ${scoringAlgorithms[0].scorerFunction(userWord)}`);
 } else if (userInput === 1){
   console.log(`Your score for ${userWord} is: ${scoringAlgorithms[1].scorerFunction(userWord)}`);
 }else if (userInput === 2){ 
   console.log(`Your score for ${userWord} is: ${scoringAlgorithms[2].scorerFunction(userWord)}`);
 }else{
   console.log("not a corrcet number choice");
 }

//for (let i = 0; i <= 2; i++){
//   if (userInput === i){
//    console.log(`Your score for ${userWord} is: ${scoringAlgorithms[i].scorerFunction(userWord)}`);
// } 
};

function transform (obj){
  let newPointStructure = {}; 
  for (let items in obj){
    //console.log(item);
    let letters = obj[items];
    for (let i = 0; i < letters.length; i++){
      newPointStructure[letters[i].toLowerCase()] = Number(items); 
    }
  }
  return newPointStructure
}


let newPointStructure = transform(oldPointStructure);


function runProgram() {
  console.clear();
  initialPrompt();
  scorerPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
  transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

