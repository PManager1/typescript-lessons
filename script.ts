let myAge = 23; 

function sayHello(): void {
    console.log( "Hello ");
}

function multiply ( val1 :number, val2:number ): number {
    return val1 * val2; 
}

//function types 
let myMultiply: (val1: number, val2: number ) => number;

myMultiply = sayHello; 
myMultiply();

myMultiply = multiply; 
myMultiply(4,2); 

