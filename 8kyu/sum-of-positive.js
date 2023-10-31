/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


// My solution
function positiveSum(arr) {
    /* declaring a reducer variable function to use on the array. This will accumulate through the array, making sure that the current value is greater than zero (since the question specifies positve values only), starting at the 0 index */
  const reduc3r = (accumulator, current) => accumulator + (current > 0 ? current : 0)
  return arr.reduce(reduc3r, 0)
}


// Other test cases (not mine)
// 1.
function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// 2. using arrow functions
const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)