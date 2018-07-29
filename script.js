"use strict";
var myAge = 23;
function sayHello() {
    console.log("Hello ");
}
function multiply(val1, val2) {
    return val1 * val2;
}
//function types 
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply(4, 2);
