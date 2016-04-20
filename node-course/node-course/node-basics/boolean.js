//boolean.js

var isValid = false;

//isValid = !isValid; //netages the value, so now is true

if (!isValid){
    console.log('Data is valid!');    
}
else{
    console.log('Data is not valid!');    
}

//console.log ('a' === 'a'); //output is true

//console.log ('a' === 'b'); //output is false

//toogleBoolean method

function toggleBoolean(boolean){
    if (typeof(boolean) === 'boolean'){
        if(boolean){
            return boolean = false;
        }
        else{
            return boolean = true;
        }
    }
    else{
        return boolean;
    }
    
}

console.log(toggleBoolean(true));
console.log(toggleBoolean(false));
console.log(toggleBoolean("hey!"));

