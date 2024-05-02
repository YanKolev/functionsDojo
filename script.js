'use strict';

const bookings = [];

const createBooking = function(flightNum , 
    numPassengers = 1, price = 199 *numPassengers){ //ES6 we can add them directly here
        //price here is automatically calculated 
        
        // we can can skip when we use undefined.


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
createBooking(' LH123', undefined, 1000)