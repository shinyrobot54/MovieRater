/**
 * @author Meyerson, Gabe (gabemeyerson@gmail.com)
 * @version 0.0.1
 * @summary Rates Movies || created 10.11.16
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueYesNo;
let rating, averageRating, runThroughCounter, totalRating, movieName;

function main(){
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueYesNo();
    while (continueYesNo === 1){
        setMovieName();
        setRunThroughCounter();
        setMovieRating();
        setTotalRating();
        setAverageRating();
        printCurrentResults();
        setContinueYesNo();
    }
    printEndResults();
}

main();

function setContinueYesNo(){
    if (continueYesNo != null) {
        continueYesNo = -1;
        while (continueYesNo !== 1 && continueYesNo !== 0){
            continueYesNo = Number(PROMPT.question('\n Would you like to continue? [Yes = 1 No = 0]\n'));
        }
    } else {
        continueYesNo = 1
    }
}

function setMovieName() {
    movieName = PROMPT.question('\n Please enter the movie title: ')
}
function setRunThroughCounter() {
    const FIRSTRUNTHROUGH = 1;
    if (runThroughCounter != null){
        runThroughCounter++;
    } else {
        runThroughCounter = FIRSTRUNTHROUGH;
    }
}

function setMovieRating() {
    let answered = 0;
    let counter = 0;
    const MAXSTAR = 5, MINSTAR = 1, NUMOFQUESTIONS = 3, CORRECT = 1;
    rating = Number(PROMPT.question('\nHow many stars would give ' + movieName + ' [1-5, 1 being the lowest] \n'));
    if (rating > MAXSTAR || rating < MINSTAR){
        while (counter < NUMOFQUESTIONS && answered != CORRECT){
            rating = Number(PROMPT.question('\n Please enter a rating between 1 through 5 \n'));
            if(rating > MAXSTAR || rating < MINSTAR){
                counter++;
            } else{
                answered = CORRECT;
            }
        }
    }
}

function setTotalRating() {
    if (totalRating != null) {
        totalRating += rating;
    } else {
        totalRating = rating;
    }
}

function setAverageRating(){
    averageRating = totalRating / runThroughCounter;
}

function printCurrentResults() {
    console.log('\n Your movie rating for ' + movieName + ' is ' + rating + '. The average rating for "The Breakfast Club" so far is ' + averageRating + '.');
}

function printEndResults() {
    console.log('\n The average movie rating for ' + movieName + ' is ' + averageRating + '!' + '\n Have a good day!');
}