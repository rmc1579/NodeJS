console.log('starting password manager');

//include 3rd party modules, libraries.

var storage = require('node-persist'); //storage object
storage.initSync(); //require to start writing and saving variables.

//save a new variable to local machine and we can access it later ('key', 'value')
//you can store variable, objects, arrays.


//storage.setItemSync('accounts',[{
//    username: 'Brown',
//    balance: 0
//}]);

//get variable storage on local machine ('key')
var accounts = storage.getItemSync('accounts');

/**********************
quick challenge
push a new account
save using setItemSync
***********************/

accounts.push({
    username: 'Jenny',
    balance: 10
});

//storage.setItemSync('accounts', accounts);
var acc = storage.getItemSync('accounts');

console.log(acc);

