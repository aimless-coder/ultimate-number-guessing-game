# Ultimate Number Guessing Game

This project is a Number Guessing Game built using JavaScript. The goal is for the player to guess a randomly generated number within a limited number of attempts, depending on the selected difficulty level. The game provides hints during the guessing process to help the player narrow down their guesses

For more information on this project idea, visit [roadmap.sh](https://roadmap.sh/projects/number-guessing-game)

## Table of Contents

- [Features](#features)
- [Game Flow](#game-flow)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Features

- **Difficulty Levels:** Choose between Easy (10 chances), Medium (5 chances), and Hard (3 chances).
- **Hint System:** Get helpful hints based on your progress, such as whether the number is even, odd, a multiple of 5, or a prime number.
- **Score Tracking:** Keep track of your highest score, which is determined by how many guesses it took to find the correct number.
- **Replayable:** After completing or losing a game, you can choose to play again or exit.

## Game Flow

1. The game starts by asking you to select a difficulty level:

- Easy: 10 chances to guess the number.
- Medium: 5 chances.
- Hard: 3 chances.

2. After selecting the difficulty, the game generates a random number between 1 and 100.

3. You will be prompted to guess the number. Depending on your progress, hints will be provided.

4. If you guess the number correctly, you win! Your score is based on how many attempts you used.

5. If you run out of chances, the game reveals the correct number and offers you the option to play again.

## Prerequisites


- [Node.js](https://nodejs.org/) (v12.0 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

    ```sh
    git clone https://github.com/aimless-coder/ultimate-number-guessing-game.git
    ```

2. Navigate to the project directory:

    ```sh
    cd ultimate-number-guessing-game
    ```

3. Install the required dependencies:

    ```sh
    npm install
    ```

4. To run the game:

```sh
node game.js
```
    