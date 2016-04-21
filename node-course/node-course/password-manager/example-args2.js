//example-args.js

//returns the argv property of the yargs module.
//create command('name of command','description of command','function(yargs)')
var argv = require('yargs')
    .command('hello','Greets the user', function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name goes here'
            },
            //quick challenge
            //add lastname command
            lastname: {
                demand: true,
                alias: 'l',
                description: 'Your last name goes here'
            }
        }).help('help');//adds help option
    })
    .help('help')
    .argv;
var command = argv._[0];

console.log(argv);


if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
}

else if (command === 'hello' && typeof argv.name !== 'undefined'){
    console.log('Hello ' + argv.name + '!');
}
else if (command === 'hello'){
    console.log('Hello World!');
}



