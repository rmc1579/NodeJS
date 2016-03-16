//scope.js

//global variable, declare outside of anything
var age = 24; 

function localFunction (){
    var name = 'name'; //local variable, not accessible outside of functions.
    //modifies value of age, javascript checks if there is a varible declaration for age 
    //since there is a var = age = 0; javascript will not replace value for global variable.
    age = 5; 
    var age = 0;
    
}

localFunction();
console.log(age); //this prints 24