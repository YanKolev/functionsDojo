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

   
checkIN(flight, john);
console.log(flight);
console.log(john);