// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myName = "Jonathan";
let myNumber = 42;

function swapVar(num, name){
    var temp = "";
    temp = num;
    num = name;
    name = temp;
    console.log("My number is", num);
    console.log("My name is", name);

}

swapVar(myNumber, myName);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

function printInt(){
    for(var num = -52; num <= 1066; num++){
        console.log(num)
    }
}

printInt();

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    let count = 0;
    for(var i = 0; i < 98; i++){
        count ++;
        console.log(count+".", "good morning!");
    }
}
beCheerful();

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThree(){
    for(var i = -300; i <= 0; i++){
        if( i % 3 == 0){
            if(i != -6){
                if(i != -3){
                    console.log(i);
                }
            }
        }
    }
}

multiplesOfThree();

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function printIntWhile(){
    let i = 2000;
    while(i <= 5280){
        console.log(i);
        i++;
    }
}

printIntWhile();

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function birthday(month, day){
    if(month == 11 && day == 24){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day....");
    }
}

birthday(1,24);

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function isLeapYear(year){
    if(year % 100 == 0 && year % 400 != 0){
        return "It's not a leap year";
    }
    if(year % 4 == 0){
        return "It's a leap year";
    }
}


console.log(isLeapYear(2004));

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function printAndCount(){
    let count = 0;
    for(var i = 512; i < 4096; i++){
        if(i % 5 == 0){
            count ++;
            console.log(i);
        }
    }
    console.log("There were", count, "multiples of 5.")
}

printAndCount();

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

function multiplesOfSix(start){
    let i = start;
    while(i <= 60000){
        if(i % 6 == 0){
            console.log(i);
        }
        i++;
    }
}

multiplesOfSix(0);

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function dojoCounting(){
    for(var i = 0; i <= 100; i++)
        if(i%5==0 && i%10==0){
        console.log(i, "Coding Dojo")
        }
        else if(i%5==0){
            console.log(i,"Coding");
        }
        else{
        console.log(i);
        }
}

dojoCounting();

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

function whatDoYouKnow(incoming){
    console.log(incoming);
}

whatDoYouKnow("Yay, algos are fun");

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function suckersHuge(){
    let sum = 0;
    for(let i = -300000; i <= 300000; i++){
        if(i % 2 !== 0){
            sum += i;
            console.log(i, sum);
        }
    }
    console.log(sum);
}

suckersHuge();

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function countdownByFours(){
    let i = 2016;
    while(i > 0){
        if(i % 2 == 0){
            console.log(i);
            i -= 4;
        }
    }
}

countdownByFours();

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flexibleCountdown(lowNum, highNum, mult){
    for(i = highNum; i > lowNum; i -= mult){
        console.log(i);
    }
}

flexibleCountdown(2,9,3);

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).


function finalCountdown(param1, param2, param3, param4){
    let i = param2;
    while(i < param3){
        if(i == param4){
        }
        else if(i % param1 == 0){
            console.log(i);
        }
        i++;
    }
}

finalCountdown(3,5,17,9);