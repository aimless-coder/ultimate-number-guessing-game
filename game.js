import promptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptSync();

let chances = 0;
let playerChance = 0;
let hintIntervals = [];
let highestScore = 0;

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const showHint = (number, playerChance) => {
     if (playerChance  === hintIntervals[0] ) {
         if (number % 2 === 0) {
             console.log(chalk.cyanBright("Hint: The number is even."));
            } else {
                console.log(chalk.cyanBright("Hint: The number is odd."));
            }
        } else if (playerChance === hintIntervals[1]) {
            if (number % 5 === 0) {
                console.log(chalk.cyanBright("Hint: The number is a multiple of 5."));
               } else {
                   console.log(chalk.cyanBright("Hint: The number is not a multiple of 5."));
               }
        } else if (playerChance === hintIntervals[2]) {;
            if (isPrime(number)) {
                console.log(chalk.cyanBright("Hint: The number is prime."));
            } else {
                console.log(chalk.cyanBright("Hint: The number is composite."));
            }
        }
};

const selectMode = () => {
    console.log(`Please select the difficulty level:\n
    1. Easy (10 chances)\n
    2. Medium (5 chances)\n
    3. Hard (3 chances)\n`);

    const choice = prompt("Enter your choice: ");
  
    if (!choice) {
      console.log(chalk.redBright("Input was empty. Try again."));
      console.log("-".repeat(60));
      selectMode();
      return;
    }
  
    if (isNaN(+choice)) {
      console.log(chalk.redBright("Invalid input. Enter a valid number."));
      console.log("-".repeat(60));
      selectMode();
    } else {
      switch (+choice) {
        case 1:
          console.log("Great! You have selected the Easy difficulty level.")
          chances = 10;
          hintIntervals = [3, 6, 9];
          break;

        case 2:
            console.log("Great! You have selected the Medium difficulty level.")
            chances = 5;
            hintIntervals = [2, 3, 4];
            break;

        case 3:
            console.log("Great! You have selected the Hard difficulty level.")
            chances = 3;
            hintIntervals = [0, 1, 2];
            break;

        default:
          console.log(chalk.redBright("Invalid Number. Please enter between 1 and 3."));
          console.log("-".repeat(60));
          selectMode();
          break;
      }
    }

    return;
  };

  const resetGame = () => {
    console.log("Do you want to play again? (Y/N)");
    const response = prompt("Enter (Y/N): ");

    if (!response) {
        console.log(chalk.redBright(chalk.redBright("Input was empty. Try again.")));
        console.log("-".repeat(60));
        selectMode();
        return;
      }

    switch (response.toLowerCase()){
        case "y":
            console.log("-".repeat(60));
            chances = 0;
            playerChance = 0;
            startGame();
            break;
        
        case "n":
            console.log("-".repeat(60));
            process.exit(1);

        default: 
            console.log(chalk.redBright("Invalid input. Enter a valid input."));
            console.log("-".repeat(60));
            resetGame();
            break;
    }
  }
  
  const gameLogic = (number) => {
    number = parseInt(number)
    
    if(playerChance < chances){  

        showHint(number, playerChance);
        const inputNumber = parseInt(prompt(chalk.yellowBright("Enter your guess: ")));

        if (!inputNumber || isNaN(inputNumber)) {
            console.log(chalk.redBright("Invalid input. Try again."));
            console.log("-".repeat(60));
            gameLogic(number)
            return;
          }

          if(inputNumber === number){
              const score = chances - playerChance;
              console.log(chalk.magentaBright.bold(`Congratulation!!! Your guess is correct. The Number is ${number};`));
              console.log("-".repeat(60));
              checkHighestScore(score);
              return;
          }else{
              if(inputNumber < number){
                  console.log(chalk.redBright(`Incorrect!!! The number is more then ${inputNumber}`));
                  console.log("-".repeat(60));
              }else{
                  console.log(chalk.redBright(`Incorrect!!! The number is less then ${inputNumber}`));
                  console.log("-".repeat(60));
              }
  
              playerChance++;
              console.log(`You have ${chances - playerChance} attempts left.`);
              gameLogic(number);
          }

    } else {
        console.log(chalk.redBright.bold(`You lost!!! Correct answer is ${number}.`));
        console.log("-".repeat(60));
        return;
    }

};

const checkHighestScore = (score) => {
    if(highestScore < score){
        highestScore = score;
    }
    return;
}

const startGame = () => {
    console.log(chalk.bold.magenta("Welcome to ULTIMATE NUMBER GUESSING GAME"));
    console.log("-".repeat(60));
    selectMode();
    console.log("-".repeat(60));
    console.log(`Your last highest score: ${highestScore}.`)
    console.log(chalk.greenBright("Let's start the game!"));
    console.log(`I'm thinking of a number between 1 and 100.\nYou have ${chances} chances to guess the correct number.`);
    
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    gameLogic(randomNumber);

    resetGame();

}

startGame()