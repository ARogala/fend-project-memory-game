# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [GamePlay Rules](#GamePlayRules)
* [Future Plans](#FuturePlans)
* [Dependencies](#Dependencies)

## Instructions

Check out the game: https://andrewrogalamemorygame.surge.sh

Webpack has been added for development and optimized production build

Cypress.io has been added for testing

npm install 

npm run dev

npm run build

npm run test

## GamePlayRules
There are eight different pairs of cards on the grid, thus making a total of sixteen cards.
The goal is to match all eight pairs in as few moves as possible. The moves are tracked and as the number of
moves increases the star rating drops.
The star rating is as follows:
Less than or equal to fifteen (15) moves results in a three (3) star win
Between sixteen (16) and twenty (20) moves results in a two (2) star win
Over twenty (20) moves results in a one (1) star win

There is a cheat button on top which can be activated only once before any moves are made.
The cheat will flash all cards for two seconds,
but applies a penalty of two (2) moves.

## FuturePlans
Increase the number of stars and adjust the rules of the game allowing the star rating to drop over time as well as when the number of moves increases.

Improve game statistics storage. Add player names and a leader board. The current version only tracks the previous play and resets every time the game is reopened.

## Dependencies
Font Awesome https://fontawesome.com/ is used for all the Icons

Google Fonts is used for font family.

Alarm Clock font provided by https://www.dafont.com/alarm-clock.font
Alarm Clock € by David J Patterson

StopWatchModule.js is used for the timer function in the game
StopWatchModule.js written by Andrew Rogala.


