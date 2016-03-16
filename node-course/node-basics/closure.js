//closure.js

function greetMaker(name){
    function greet(){
        console.log('Hello ' + name + '!');
    }
    return greet;
}

var greetUser = greetMaker('Jessica');
greetUser();

var greetUser2 = greetMaker('Joe');
greetUser2();

//challenge
//method createrAdder(baseNumber)

function createrAdder(baseNumber){
    return function (numberToAdd){
       return baseNumber + numberToAdd;
    }
}

var addTen = createrAdder(10);
console.log(addTen(2));// 12
console.log(addTen(0));//10;