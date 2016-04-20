//bankaccount-2.js

//declaring accounts array
var accounts = [];

//Account Object Definition
//balance
//username


//method createAccount(account)
function createAccount(account){
    accounts.push(account);
    return account;
}

//method deposit(account, amount)
function deposit(account, amount){
    account.balance += amount;
}

//method withdraw(account, amount)
function withdraw(account, amount){
    account.balance -= amount;
}

//method getBalance(account)
function getBalance(account){
    return account.balance;
}

//method getAccount(username)
function getAccount(username){
    var matchedAccount;
    accounts.forEach(function (account){
        if(account.username === username){
            matchedAccount = account;            
        }
        
    });
    return matchedAccount;
}

//object account
var robertoAccount = createAccount({
    username: 'Roberto',
    balance: 0
});

var jennAccount = createAccount({
   username: 'jenn001',
    balance: 12
});


deposit(robertoAccount, 100);
console.log(getBalance(robertoAccount));
withdraw(robertoAccount, 25);
console.log(getBalance(robertoAccount));

console.log(accounts);

var existingAccount = getAccount('Roberto');
console.log(getBalance(existingAccount));
