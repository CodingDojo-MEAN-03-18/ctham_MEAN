var _ = {
    map: function(arr, callback) {
        // Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
        // _.map([1, 2, 3], function(num){ return num * 3; });
        // => [3, 6, 9]
        // _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
        // => [3, 6, 9]
        // _.map([[1, 2], [3, 4]], _.first);
        // => [1, 3]
        //code here;
        var x = [];
        for (var i=0; i<arr.length; i++) {
            x.push(callback(arr[i]));
        }
        return x;
    },
    reduce: function(arr, callback, init) {
        // Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
        // If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
        // var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
        // => 6
        // code here;
        var x = 0;
        for (var i=init; i<arr.length; i++) {
            x = callback(x, arr[i]);
        }
        return x;
    },
    find: function(arr, callback) {   
        // Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
        // var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        // => 2
        // code here;
        for (var i=0; i<arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
        return null;
    },
    filter: function(arr, callback) {
        // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
        // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        // => [2, 4, 6]
        // code here;
        var x = [];
        for (var i=0; i<arr.length; i++) {
            if (callback(arr[i])) {
                x.push(arr[i]);
            }
        }
        return x;
    },
    reject: function(arr, callback) {
        // Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
        // var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        // => [1, 3, 5]
        // code here;
        var x = [];
        for (var i=0; i<arr.length; i++) {
            if (!callback(arr[i])) {
                x.push(arr[i]);
            }
        }
        return x;
    }
}
// you just created a library with 5 methods!


console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); 
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));