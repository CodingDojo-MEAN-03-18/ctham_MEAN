// Part I
// Create a function called starString() that takes a number and returns a string of that many *. For example:
// let stars = starString(8)
// If we console.log(stars) we should see ******** printed in our terminal.
console.log('*** Part I');
function starString(x) {
    let str = '*';
    return str.repeat(x);
}
let stars = starString(8);
console.log(stars);


// Part II
// Create a function called drawStars() that takes an array of numbers and prints out *.
// let x = [4, 6, 1, 3, 5, 7, 25]
// drawStars(x) should print the following in when invoked:
// ****
// ******
// *
// ***
// *****
// *******
// *************************
console.log('*** Part II');
function drawStars(x) {
    for (i=0; i<x.length; i++) {
        console.log(x[i],starString(x[i]));
    }
}
let x = [4, 6, 1, 3, 5, 7, 25];
drawStars(x);


// Part III
// Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.
// For example:
// let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
// drawStars(x) should print the following in the terminal:
// ****
// ttt
// *
// mmmmmmm
// *****
// *******
// jjjjjjjjjjj
console.log('*** Part III');
function starString1(x) {
    if ((Number.isInteger(x))){
        let str = '*';
        return x+' '+str.repeat(x);
    } else {
        let str = x.toLowerCase().slice(0,1);
        return x.length+' '+str.repeat(x.length);
    }
}
function drawStars2(x) {
    for (i=0; i<x.length; i++) {
        console.log(starString1(x[i]));
    }
}
let xx = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
drawStars2(xx);