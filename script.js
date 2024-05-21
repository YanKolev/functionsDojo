'use strict';

const bookings = [];

const createBooking = function(flightNum , 
    numPassengers = 1, price = 199 *numPassengers){ //ES6 we can add them directly here
        //price here is automatically calculated 

        //ES5 way of hardcoding 
        // numPassengers = numPassengers ||1;
        // price = price ||199;
        // we can use short cirquit since we have 2 undefined in the object- and they are falsy values.
        // the old way before es6 it will be 1 with the or operantor
        const booking = {
            flightNum, 
            numPassengers,
            price
        }
        console.log(booking);
        booking.push(booking);
    };

createBooking('LH123');
createBooking(' LH123', undefined, 1000) // we can skip by using undefined.

// Passing arguments: Value vs Reference

const flight = 'LH234';
const john = {
    name: 'John Doe',
    passport: 232323453453453
}

//check in function

const checkIN =  function (flightNum, passenger){
    flightNum = 'LH999'
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 21313123132){
        alert('Checked in')

    }else {
        alert('Wrong passport!');
    }
}

   
// checkIN(flight, john);
// console.log(flight);
// console.log(john);


//Is as same as doing ...
// const flightNum = flight;
// const passenger = john;
//when we try to opy object like  john- we are only copying th refrence in the memory heap 
//they point to the same object in the memory.
// Passing a primitive type to a funtion is just the same as creating a copy outside of the function 
//While we pass an object into a function is really just like copying an object(whatever we change in the copy will change in the original)

//real-life function that can create issues in big code bases. 

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() *
     100000000);
}

newPassport(john); //when the person is manipulated- its reflected in john and when its passed into checked in function the passport is no longer the same.

checkIN(flight, john); // with this we have 2 function manipulating the same object, that is creating a problem

//2 terms that are used in programming when dealing with funtions: 
//passing by value, -> JS only has this.
//passing by reference-> JS DOES NOT HAVE passing by refrence
//we can create passing a reference(the memory address of the object)= we pass a refrence to the function(value) , but we DO NOT PASS BY REFERENCE.


//--------Functions accepting callback functions------

//string transformation functions

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher-order function
const transformer = function (str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${str}`);

    console.log(`transformed by: ${fn.name}`);

}

transformer('JavaScript is the best!', upperFirstWord);// here we are only passing the function value itself> we are not calling the function

transformer('Javascript is the best!', oneWord);
//we are calling the transformer function and into that we are passing
//the one word funtion(call-back function)

//JS uses callbacks all the time 
const high5 = function(){
    console.log(':)')
}
document.body.addEventListener('click', high5)
//high5- is hte call back function and the addeventlister is the high-order function

['john', 'martha', 'adam'].forEach(high5);

//The biggest advantage of call functions is that it makes easy to split our code into more re-usable and readable parts
//2nd advantage- they allow us to make abstraction



// ----- Functions returning functions ----

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')
greeterHey('John');
greeterHey('Steven');

greet('Hello')('John');

//arrowfunction conversion of the greet function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('John');



//-- Call and Apply Methods --

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`
        ${name} booked a seat on ${this.airline} 
        flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
    },
};

lufthansa.book(239, 'John Smith');
lufthansa.book(635, 'Mike Rogers');

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

//create a new function 
const book = lufthansa.book

// book(23, 'Randy Orton'); // it will point undefined / book function is regular function call, so the this keyword will point into undefined.

book.call(eurowings, 23, 'Randy Orton'); // we called the call method that calls the book function with the this keyword set to eurowings.
//manually making the this keyword to any function that we can to call 
console.log(eurowings);

book.call (lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
//the first argument manually sets to where this call method should look
//manually manipulating the this keyword

const swiss = {
    airline: 'Swis Air Lines', // the format should be the same 
    iataCode: 'LX',
    bookings: []
}

book.call (swiss, 583, 'John Dozzer');
console.log(swiss)


//apply method does the same thing as the call method earlier, 
//apply does not receive a list of arguments after the this word but it will take an array 

const flightData = [583, 'DB Cooper']
book.apply(swiss,flightData);
console.log(swiss);
//apply is not that used anymore in JS.


book.call(swiss, ...flightData); //the spread operator is overtaking the apply method.

//--- Bind method --- 

//allow us to manually set the this keyword for any function call.
//the difference is that bind does not immediately call the function, 
//instead it returns a new function where the this keyword is bound its set to whatever value we set to bind. 

//book.call(eurowings, 23, 'Sarah Connor');

const bookEW  = book.bind(eurowings); //this will not call the function it will create a new function where this is set to eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23,'Steve Williams');

const bookEW23 = book.bind(eurowings, 23); //adding specific parameters to the bind function
bookEW23('John Smith');
bookEW23('Mimmy Cooper');
//basically pre-set 23


//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    
    this.planes++;
    console.log(this.planes); 

};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application of the bind method

//we are not even used about the this keyword, but we use bind- >
//with partial application we are pre-setting parameters

const addTax = (rate, value ) => value + value*rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null,0.23); //manually setting the rate at 23%, we need to use null as the first argumets is this keyword. but we do not need it

console.log(addVAT(100));

/// challenge
const addTaxRate = function(rate){
    return function(value){
        return value + value*rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


    // immediately invoked function expressions // 

    // sometimes we need a javascript we need a function that is only executed once and then dissapears
 // used for async-await

 //regular function call, but with this you can call it couple of times

 const runOnce = function (){
    console.log('this will never run again');
 }
runOnce();

// below is the example of IIFE- we can trick javascript by wrappin the whole function into parenthesis and then use empty parenthesis after it: 

(function(){
    console.log('This will never run again ')
    const isPrivate = 23;
})();
//we now transformed the statement into an expression.

console.log(isPrivate);

//below is the the way to write it as an arrow function
(()=>console.log('This will also never run again'))
();

//functions create scopes one scope does not have acccess to inner scope.
// basically the global scope does not have access of anything that is inside of a scope.
// therefore we say that all the data defined inside a scope is private(encapsulated)
// its important to hide variables and scopes are good tool for doing this
// In ES6 variables declared with let and const ->create their own scope inside a block.



//---- Closures----

// we do not create closures manually it happens automatically in ertain situations, below example

const secureBooking = function(){
    let passengerCount = 0;


    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();
// Closure->any function always has access to the variable enviourment of the execution context in which the function was created.
// Closure is the variable enviourment attached to the function, exactly as it was at the time and place the function was created.
//closure has priority over the scope chain, 

console.dir(booker);
//it will show scopes in the console. and at index 0 u can see the securebooking
// double brackets means its internal property that its not accessible by code. 


//Example 1 

let f;

const g = function(){
    const a =23;
    f =function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function (){
        console.log(b * 2);
    }
}


g();
f();

//re-assigning f function
h();
f();
//in the end F will be 46, and f was not even defined in the variable enviourment,
//as we assign a function, enclosed the function and it was able to access the a variable.
// the variable enviourment G is no longer there, a is in ''the backpack''
console.dir(f);

//Example 2 

// timer

const boardPassengers = function(n, wait){
    const perGroup = n / 3 // the closure uses this first- closure has priority over the scope chain.

    //this call back function was executed independently from board passenger, but it was still able to use n and perGroup/ closure is being created.
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    } , 1000);

    console.log(`Will start boarding in ${wait} seconds`)
    
}

const perGroup = 1000; //creating global variable so the clossure can use it 
boardPassengers(100, 3)