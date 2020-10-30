// For Loop
// While
// Do; Continue

// for('a given condition') {
//     // do something
// }

// var x = 10 

// for (var x = 0; x <= 10; x+=2) {
//     console.log("x is " + x)
// }

//while ('condition') {
//     do something
// }

// var x = 0;

// while (x <= 10) {
//     console.log('I am running number ' + x)
//     x++;
// }

// A function that adds up the numbers from 0 to 10 inclussive


// ++++++Using while LOOP++++++ //

var number = 0;
var stop = 10;
var sum = 0;

while (number <= stop ) {
    sum = sum + number // or sum += number
    console.log(sum)
    number++
}

console.log('Total: ' + sum);

// Using a for-loop, add the numbers from 0 to 10 inclussive