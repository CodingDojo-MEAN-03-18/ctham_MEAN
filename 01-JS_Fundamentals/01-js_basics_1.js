// Basic 1
// • Create a variable x as an empty array []. Log this array to your console.
x = [];
console.log(x);

// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
x.push('coding', 'dojo', 'rocks');
console.log(x);

// • Use .pop() to remove the final element of your array.
x.pop();
console.log(x);

// • Log the final value of x, what is it?
console.log(x);

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.
y = [];
console.log(y);

// • Use .push() to add the number 88 to array y.
y.push(88);
console.log(y);

// • What happened?
// When push() to add the number 88 to array Y, it add the new value into the array Y.

// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
z = [9, 10, 6, 5, -1, 20, 13, 2];

// • Print every element to the console.
console.log(z);

// • Now print every element except the final number.
z.pop();
console.log(z);

// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names);

// • Print the length of all names to the console.
console.log('*****')
for (let i=0; i < names.length; i++) {
    console.log(names[i]+' '+names[i].length);
}

// • Now modify your code so only names with a length of 5 print.
console.log('*****')
for (let i=0; i < names.length; i++) {
    if (names[i].length == 5) {
        console.log(names[i]+' '+names[i].length);
    }
}

// Basic 5
// • Create a function yell that takes one parameter called string.
console.log('*****')
function yell1(string){
    console.log(string);
}
yell1("hello");

// • Make yell return that string in all uppercase.
console.log('*****')
function yell2(string){
    console.log(string.toUpperCase());
}
yell2("hello");

// • Where could you look to find out more about uppercasing strings in JavaScript?
// https://www.w3schools.com/jsref/jsref_touppercase.asp