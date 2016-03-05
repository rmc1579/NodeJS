//objects.js

//define object
var person = {
    gender: 'male',
    eyecolor: 'brown'
};

person['firstName'] = 'Roberto';
person.lastName = 'Medina';
person.age = 24;

//console.log(person);

delete person.age;

//console.log(person);

function greetUser (person){
    var name = person.firstName + ' ' + person.lastName; 
    console.log('Hello' + ' ' + name + '!');
}

greetUser(person);


var pet = {
    name: 'Patches',
    type: 'dog'    
};

function printPet(pet){
    console.log('You have a ' + pet.type + ' name: ' + pet.name + '!');
}

printPet(pet);