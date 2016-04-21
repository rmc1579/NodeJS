//example-args.js

//returns the argv property of the yargs module.
var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);

//quick challenge
//print firstname and lastname from command line arguments
//--name --lastname

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
}

else if (command === 'hello' && typeof argv.name !== 'undefined'){
    console.log('Hello ' + argv.name + '!');
}
else if (command === 'hello'){
    console.log('Hello World!');
}



