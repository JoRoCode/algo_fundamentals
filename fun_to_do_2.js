// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num){
    let arr = [];
    let i = num;
    while(i >= 0){
        arr.push(i);
        i--;
    }
    console.log("This array has a length of", arr.length);
    return arr;
}

console.log(countdown(5));

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printAndReturn(arr){
    console.log(arr[0]);
    return arr[1];
}

console.log(printAndReturn([24,75]))

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr){
    let sum = 0;
    sum = arr[0] + arr.length;
    return sum;
}

console.log(firstPlusLength([2,45,33,68,12,31]))
console.log(firstPlusLength(["what",45,33,68,12,31]))
console.log(firstPlusLength([false,45,33,68,12,31]))

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr){
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

console.log(greaterThanSecond([1,3,5,7,9,13]));

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greaterTwo(arr){
    let count = 0;
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            newArr.push(arr[i]);
            count++;
        }
    }
    console.log(newArr.length);
    return newArr;
}

console.log(greaterTwo([1,3,5,7,9,13]));
console.log(greaterTwo([1]));

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.



// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".



// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.




// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.