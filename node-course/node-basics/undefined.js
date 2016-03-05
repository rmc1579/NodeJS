//undefined.js

var name = 'Me';

name = undefined;

console.log(name);

function doesNothing(){
    //undefined is print out, because the function doesn't return anything
    //by default javascript print out undefined as the default return value
}

console.log(doesNothing());

if (typeof name === 'undefined'){
    console.log('name is undefined');
}

//challenge

//greetUser(name) method

function greetUser(name){
    if (typeof name != 'undefined'){
        console.log('Greetings ' + name + '!');
    }
    else{
        console.log('Hello World!');
    }
}

greetUser('Jen');
greetUser();
greetUser(name);
