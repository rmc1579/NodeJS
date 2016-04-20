//bankaccount-3.js

//declaring accounts array
var accounts = [];

//method createAccount(account)
function createAccount(account){
    accounts.push(account);
    return account;
}

//method getAccount(username)
function getAccount(username){
    var matchedAccount;
    //using for or while loop instead of forEach loop
    
    for (var i = 0; i < accounts.length; i++){
        if (accounts[i].username === username){
            matchedAccount = accounts[i];            
        }
    }
    return matchedAccount;
}

//method deposit(account, amount)
function deposit(account, amount){
    if (typeof amount === 'number'){
        account.balance += amount;
    }
    else{
        console.log('deposit failed!, amount is not a number');
    }
}

//method withdraw(account, amount)
function withdraw(account, amount){
    if (typeof amount === 'number'){
        account.balance -= amount;
    }
    else{
        console.log('withdraw failed!, amount is not a number');
    }
}

//method getBalance(account)
function getBalance(account){
    return account.balance;
}

//method createBalanceGetter(account)
function createBalanceGetter(account){
    return function(){
        return account.balance;
        
    }
}

//create a new account
var jennAccount = createAccount({
    username: 'jenn001',
    balance: 0
});

//make deposit
deposit(jennAccount, 120);
//withdraw 
withdraw(jennAccount,'my string');

//create a new account
var robertoAccount = createAccount({
    username: 'Roberto',
    balance: 0
});

//getaccount
var jennAccount2 = getAccount('jenn001');
var getjennAccount2Balance = createBalanceGetter(jennAccount2);

console.log(getjennAccount2Balance());



