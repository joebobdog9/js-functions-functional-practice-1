// //  Part I

// // ----------------------------
// // write your own forEach() function that takes an array and a function
// // ----------------------------

// function forEach(array, callback) {
//     // YOUR CODE HERE
//     for (var i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }

// // tests
// // ---
// var total = 1
// forEach([1, 2, 3, 4], function(a) {
//     total *= a;
// })
// console.assert(total === 24)

// // ----------------------------
// // using forEach() from above, write your own reduce()
// // that takes an array and a function
// // ----------------------------

// function reduce(array, callback, defaultValue) {
//     //     // YOUR CODE HERE
//     var a = defaultValue ? defaultValue : array.shift()
//     forEach(array, function(v, i, array) {
//         a = callback(a, v, i, array)
//     })
//     return a
// }


// // // tests
// // // ---
// console.assert(
//     reduce([1, 2, 3, 4], function(a, v) {
//         return a * v
//     }) === 24
// )

// // // ----------------------------
// // // using forEach() from above, write your own map()
// // // that takes an array and a function
// // // ----------------------------

// function map(array, callback, defaultValue) {
//     //     // YOUR CODE HERE
//     var newArray = []
//     forEach(array, function(v, i, array) {
//         newArray.push(callback(v, array, i));
//     });
//     return newArray;
// }



// // // // tests
// // // // ---
// var squares = map([1, 2, 3, 4], function(v) {
//     return v * v
// })
// console.assert(squares[0] === 1)
// console.assert(squares[1] === 4)
// console.assert(squares[2] === 9)
// console.assert(squares[3] === 16)

// // // ----------------------------
// // // using reduce() from above, write your own filter()
// // // that takes an array and a function
// // // ----------------------------

// function filter(array, callback) {
//     // YOUR CODE HERE
//     var passed = []
//     reduce(array, function(passed, v, i, array) {
//         if (callback(v, i, array)) {
//             passed.push(v)
//         }
//         return passed;
//     }, passed)
//     return passed;
// }


// // tests
// // ---
// var evens = filter([1, 2, 3, 4], function(v) {
//     return v % 2 === 0
// })
// console.assert(evens[0] === 2)
// console.assert(evens[1] === 4)


// // ----------------------------
// // using reduce() from above, write your own sum()
// // that adds up all arguments to sum (note: variadic behavior)
// // ----------------------------

// function sum(array, callback, defaultValue) {
//     // YOUR CODE HERE
//     var args = Array.prototype.slice.call(arguments)
//     return args.reduce(function(a, v) {
//         return a + v
//     }, 0)
// }

// // // tests
// // // ---
// console.assert(sum(1, 2, 3) === 6)
// console.assert(sum(1, 2, 3, 4) === 10)
// console.assert(sum(1, 2, 3, 4, 5) === 15)

// // ----------------------------
// // using Array.sort(), sort the following array
// // of people by name
// // ----------------------------

// var names = [{
//     name: "Matt",
//     alma_mater: "Univ of Texas - Austin"
// }, {
//     name: "Brian",
//     alma_mater: "Texas A&M"
// }, {
//     name: "Jesse",
//     alma_mater: "Univ of Texas - Austin"
// }]

// names.sort(function(a, b) {
//     // YOUR CODE HERE
// if(a.name > b.name ){
//     return 1;
// }
// if(a.name < b.name ){
//     return -1;
// }
// console.log(names)
// })

// // // tests
// // // ---
// console.assert(names[0].name === "Brian")
// console.assert(names[1].name === "Jesse")
// console.assert(names[2].name === "Matt")

// // ----------------------------
// // Using Array.map(), Array.filter(), and Array.sort() on the
// // array below:
// // - filter for customers whose first-names start with 'J',
// // - map to their fullnames,
// // - and then sort the items alphabetically by fullname
// // ----------------------------

var customers = [{
    first: 'Joe',
    last: 'Blogs'
}, {
    first: 'John',
    last: 'Smith'
}, {
    first: 'Dave',
    last: 'Jones'
}, {
    first: 'Jack',
    last: 'White'
}]

var results = customers
    .filter(function(v, i, array) {
        // YOUR CODE HERE
    return /^J.+$/.test(obj.first) 
}
   

console.log(customers)

    .map(function() {
        // YOUR CODE HERE

        
    })
    .sort(function() {
        // YOUR CODE HERE
    })

// // tests
// // ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")
