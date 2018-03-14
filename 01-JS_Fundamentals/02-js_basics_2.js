// Test 1
// let test1 = magic_multiply(5, 2);
// console.log(test1);
// // => 10
console.log("*****");
function magic_multiply1(x1,x2) {
    return x1*x2;
}
let test1 = magic_multiply1(5, 2);
console.log(test1);


// Test 2
// let test2 = magic_multiply(0, 0);
// console.log(test2);
// // => "All inputs 0"
console.log("*****");
function magic_multiply2(x1,x2) {
    if (x1 == 0 && x2 == 0) {
        return "All inputs 0";
    } else if ( x1 == 0 || x2 == 0) {
        return 0;
    } else {
        return x1*x2;
    }
}
let test2 = magic_multiply2(0, 0);
console.log(test2);


// Test 3
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);
// // => [2, 4, 6]
// Hint: You will need to handle your output differently depending on if x is an array or an integer.
console.log("*****");
function magic_multiply3(x1,x2) {
    // console.log(x1.length);
    // console.log(x2.length);
    if (x1 == 0 && x2 == 0) {
        return "All inputs 0";
    } else if ( x1 == 0 || x2 == 0) {
        return 0;
    } 
    if (x1.length > 0) {
        xx = []
        for (i=0; i<x1.length; i++) {
            xx.push(x1[i]*x2);
        }
        return xx
    } else {
        return x1*x2;
    }
}
let test3 = magic_multiply3([1,2,3],2);
console.log(test3);


// Test 4
// let test4 = magic_multiply(7, "three");
// console.log(test4);
// // => "Error: Can not multiply by string"
console.log("*****");
function magic_multiply4(x1,x2) {
    if (Number.isInteger(x1)) {
        // return x1;
    }
    if (Number.isInteger(x2)) {
        if (x1 == 0 && x2 == 0) {
            return "All inputs 0";
        } else if ( x1 == 0 || x2 == 0) {
            return 0;
        }
        if (x1.length > 0) {
            xx = []
            for (i=0; i<x1.length; i++) {
                xx.push(x1[i]*x2);
            }
            return xx
        } else {
            return x1*x2;
        }
    } else {
        return "Error: Can not multiply by string!";
    }
}
let test4 = magic_multiply4(7, "three");
console.log(test4);

// Test 5 - Bonus
// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
// // => "BrendoBrendoBrendoBrendo"
// How could we check if an array is an array?
console.log("*****");
function magic_multiply5(x1,x2) {
    if (Number.isInteger(x1)) {
        // continue when x1 is integer
        // console.log('int');
    } else if (Array.isArray(x1)) {
        // continue when x1 is array
        // console.log('array');
    } else {
        xx = "";
        for (i=0; i<x2; i++) {
            xx = xx.concat(x1);
        }
        return xx;
    }
    if (Number.isInteger(x2)) {
        if (x1 == 0 && x2 == 0) {
            return "All inputs 0";
        } else if ( x1 == 0 || x2 == 0) {
            return 0;
        }
        if (x1.length > 0) {
            xx = []
            for (i=0; i<x1.length; i++) {
                xx.push(x1[i]*x2);
            }
            return xx
        } else {
            return x1*x2;
        }
    } else {
        return "Error: Can not multiply by string!";
    }
}
let test5 = magic_multiply5("Brendo", 4);
console.log(test5);