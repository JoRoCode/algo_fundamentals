// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function biggieSize(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(biggieSize([-1,3,5,-5]));


// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
let low = arr[0];
let high = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        else if(arr[i] > high){
            high = arr[i];
        }
    }
    console.log("The lowest value in the array is", low);
    return high;
}

console.log(printLowReturnHigh([6,9,2,18,3,44,12,1]));

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr){
    let secondToLast = arr[arr.length - 2];
    console.log(secondToLast);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            return arr[i];
        }
    }
}


console.log(printOneReturnAnother([2,5,19,44,2,33,189,99,66,82,1,100]));
console.log(printOneReturnAnother([18,26,144,58,23,33,49,12,66,82,72,1000]));
console.log(printOneReturnAnother([286,92,144,833,12,42,24,43,53,281,8841,999,6285,4444444]));
// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr
}

console.log(doubleVision([1,2,3,4,5,6,7,8,9,10]));

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

console.log(countPositives([-1,1,1,1]));
console.log(countPositives([-4,-2,-76,44,1,67,-84,22,-9]));
console.log(countPositives([-5,-4,-3,-2,-1,0,1,2,3,4,5]));

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evenAndOdds(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1 && arr[i+1] % 2 == 1 && arr[i+2] % 2 == 1){
            console.log("That's Odd...");
        }
        else if(arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0){
            console.log("Even more so...");
        }
    }
}

evenAndOdds([1,3,5,2,4,6,1,2,3,4,5,6,1,1,1,4,4,4]);
evenAndOdds([2,2,2,3,3,3]);
evenAndOdds([3,3,3,2,2,2]);

// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementTheSeconds(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            arr[i] = arr[i]+=1;
        }
        console.log(arr[i])
    }
    return arr;
}

console.log(incrementTheSeconds([1,2,3,4,5,6,7,8,9,10]));

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLengths(arr){
    for(i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(previousLengths(["why","hello","you","tricky","little","devil","you"]));

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSeven(arr){
    let newArr=[];
    for(i=1; i < arr.length;i++){
        newArr.push(arr[i] + 7)
    }
    return newArr;
}

console.log(addSeven([1,2,3,4,5,6,7,8,9,10]));

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].


// function reverseArray(arr){
//     for(i = 0; i < arr.length/2; i++){
//         for(j = arr.length-1; j > arr.length/2; j--){
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     return arr;
// }
// function reverseArray(arr){
//     for(var i = 0; i < j; i++){
//         for(var j = arr.length-1; j > i; j--){
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     return arr;
// }

function reverseArray(arr){
    let i = 0;
    let j = arr.length-1;
    while(arr[i] < arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
        i++;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10,11]));

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

 

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

 

// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].




// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.