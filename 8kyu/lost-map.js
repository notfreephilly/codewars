// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// My solution
function maps(x){
    let newArray = x.map( num => num * 2);
    return newArray;
}
  

// Other solution
function map2(y) {
    return y.map(n => n * 2);
}