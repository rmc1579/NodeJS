//functions.js

function greetUser(name, lastname){
    return ('Hello' + ' ' + name + ' ' + lastname + '!');
    
}

var greeting1 = greetUser('Roberto', 'Medina');
console.log(greeting1);
console.log(greetUser('Jen', 'Smith'));


function add (a, b){
    return a + b;
}

console.log(add(5, 2));

function subtract(a, b){
    return a - b;
}

console.log(subtract(5, 2));