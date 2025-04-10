// alert("Hellow World!");

var s = "Hellow wrld, meow"
console.log(s);
// document.write("This overwrites the HTML page")

function print3Ways() {
    alert("Alerting")
    console.log("Debugging")
    document.write("Overwriting all HTML")
}

var arr = [1, 2, 3, 4, 5];
function funWithArrays() {
    document.write("The sum of the array is " + sumArray());
    document.write("<br>The minimum element in the array is " + findMin());
    document.write("<br>The maximum element in the array is " + findMax());
    document.write("<br>The average of the elements in the array is " + average());
}

function sumArray() {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

function findMin() {
    let lowest = arr[0]
    arr.forEach(element => {
        if (element < lowest) {
            lowest = element
        }
    });
    return lowest;
}

function findMax() {
    let highest = arr[0]
    arr.forEach(element => {
        if (element > highest) {
            highest = element
        }
    });
    return highest;
}

function average() {
    return (sumArray() / arr.length);
}

function soManyFunctions() {
    console.log("my left stroke just went viral");
    plainOldFunction();
    plainOldFunction(":3");
    //nestedFunction(); //gives an error bc it's not in scope
    firstFunction(callBackFunction);
}

function plainOldFunction(a = "default value") {
    console.log("this is a function " + a + " that can call the nested function");
    nestedFunction();
    function nestedFunction() {
        console.log("this is a the nested function");
    }
}

function firstFunction(cbf) {
    console.log("this is the first function");
    cbf();
}

function callBackFunction() {
    console.log("this is the callback function")
}

//Objects
const dog = {
    name: "Boomer",
    info: {
        pet_type: "dog",
        age: 9,
        tricks: ['speak', 'roll over'],
    },
    speak: function () { console.log("woof") }
}
console.log("My dog " + dog.name + " can do lots of tricks: " + dog.info.tricks);