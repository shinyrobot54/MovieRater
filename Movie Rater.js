/**
 * @author Meyerson, Gabe (gabemeyerson@gmail.com)
 * @version 0.0.1
 * @summary Rates Movies || created 10.11.16
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueYesNo;
let rating, averageRating, counter, totalRating;

function main(){
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueYesNo();
    while (continueYesNo === 1){
        setCounter();
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
        continueYesNo = -1
        while (continueYesNo !== 1 && continueYesNo !== 0){
            continueYesNo = Number(PROMPT.question('\n Would you like to continue? [Yes = 1 No = 0]\n'));
        }
    } else {
        continueYesNo = 1
    }
}

function setCounter() {
    counter ++;
}

function setMovieRating() { //need to refactor this method
    rating = Number(PROMPT.question('\nHow many stars would give "The Breakfast Club" [1-5, 1 being the lowest] \n'));

}

function setTotalRating(){
    totalRating += rating;
}

function setAverageRating(){
    averageRating = totalRating / counter;
}

function printCurrentResults() {
    console.log('\n Your movie rating for "The Breakfast Club" is ' + rating + '. The average rating for "The Breakfast Club" so far is ' + averageRating + '.');
}

function printEndResults() {
    console.log('\n The average movie rating for "The Breakfast Club" is ' + averageRating + '!');
}