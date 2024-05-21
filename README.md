# functionsDojo
Place for practicing javaScrip functions

Default Parameters: its useful to have functions that some parameters are set to default in case we do not want to change it.

First-class vs higher-order functions
Firtst class functions: 
-JS treats functions as first-class functions
-Functions are simply treated as values
-Functions are just another "type" of object=>
since object are values, functions are values too-> Hence we can store them in variables or object properties. We can also pass function as arguments for another functions. 
There is also->return function from functions.
->call methods on functions (bind method)

Higheer-order function is either a function that receives anothe function as an argument or a function that returns a new function or both. This is possible because of first-class functions.

first class function is just a feature that a programming language has or not-> all functions are values. 


Closures: A closure is the closed-over variable enviourment of the execution context in which a function was created, even after execution context is gone.

Closures gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a refrence to its outer scope, which preserves the scope chain throughout time.

Closures makes sure that a function doesn't loose connection to the variables that existed at the functions's birth place. 

A closure is like a backpack function that a function carries around whereever it goes. This backpack has all the variables that were present in the enviourment where the function was created. 