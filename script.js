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