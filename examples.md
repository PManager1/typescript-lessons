===================================
===================================







===================================
===================================
<!-- // Objects  -->

let userData: { name:string, age:number } = {
    name: "max", 
    age: 24
};

console.log ( userData);  

userData = {
    age: 22,
    name: 'hello', 
}; 

===================================
===================================

<!-- function types  -->

let myAge = 23; 

function sayHello(): void {
    console.log( "Hello ");
}

function multiply ( val1 :number, val2:number ): number {
    return val1 * val2; 
}

//function types 
let myMultiply: (val1: number, val2: number ) => number;

myMultiply = sayHello;    //error 
myMultiply();

myMultiply = multiply;   //no error 
myMultiply(4,2); 

===================================
===================================

//argument types 

function multiply ( val1 :number, val2:number ): number {
    return val1 * val2; 
}
console.log( ' multiply ',  multiply(22, "max") );

===================================
===================================
// function types 

let myAge = 23;
let myName = 'Max';

function returnMyname ():string {
    return myAge;
}
console.log( returnMyname());

function sayHello(): void {

    console.log( "Hello ");
    return myAge;
}


===================================
let car:any = "BMW"
console.log( car );

car = { brand: "Bmw", mil: 200 }

console.log( car );



===================================
enum Color {
    Gray,          // 0 
    Green = 100, 
    Blue          // 2
}

let myColor: Color = Color.Green;    
let bColor: Color = Color.Blue;    
console.log(myColor);   // 100
console.log(bColor);   // 101


===================================
Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases

// Enums
// make numbers more expressive 

enum Color {
    Gray, 
    Green, 
    Blue 
}

let myColor: Color = Color.Gray; 
console.log(myColor); 

===================================

enum Color {
    Gray,          // 0 
    Green = 100, 
    Blue          // 2
}

let myColor: Color = Color.Green;    
console.log(myColor);   // 100

===================================
===================================



// tuples 
let address: [string, number ] = ['superstreet', 99 ];

console.log( 'address =', address  );