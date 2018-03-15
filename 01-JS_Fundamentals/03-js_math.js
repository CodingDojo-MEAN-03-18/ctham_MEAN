// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
console.log('*** Math 1');
function zero_negativity(x) {
    if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            if (x[i] < 0) {
                return false;
            }
        }
        return true;
    }
}
let math1 = zero_negativity([1,2,3,4,-1]);
console.log(math1);


// Math 2
// Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd.
console.log('*** Math 2');
function is_even(x) {
    return x % 2 == 0;
}
console.log(is_even(1));
console.log(is_even(2));


// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
console.log('*** Math 3');
function how_many_even(x) {
    cnt = 0;
    for (i = 0; i<x.length; i++) {
        if (is_even(x[i])) {
            cnt++;
        }
    }
    return cnt
}
console.log(how_many_even([1,2,3,4]));

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
console.log('*** Math 4');
function create_dummy_array(x) {
    dummy = [];
    for (i=0; i<x; i++) {
        dummy.push(Math.floor(Math.random()*10));
    }
    return dummy;
}
console.log(create_dummy_array(5));

// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
console.log('*** Math 5');
function random_choice(x) {
    return x[Math.floor(Math.random()*x.length)];
}
console.log(random_choice([1,2,3,4]));