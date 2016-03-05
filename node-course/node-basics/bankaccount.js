//bankaccount.js

//declaring account object
var account = {
    balance: 1,
    accNumber: 0
};


//deposit method
function deposit(accountNumber, amount){
    
    var previousBalance = account.balance;
    var newBalance = account.balance + amount;
    account.balance = newBalance;
    account.accNumber = accountNumber;
    var deposit;
    
    deposit = 'Your previous balance is: $' + previousBalance;
    
    deposit = deposit + '\nYou made a deposit to account: ' + accountNumber + '\nwith the amount of: $' + amount + '\nYour new balance is: $' + newBalance;
    return deposit;
}


//withdraw method
function withdraw (accountNumber, amount){
    var previousBalance = account.balance;
    var newBalance = account.balance - amount;
    account.balance = newBalance;
    account.accNumber = accountNumber;
    var withdraw;
    
    withdraw = 'Your previous balance is: $' + previousBalance;
    withdraw = withdraw + '\nYou made a withdraw from account: ' + accountNumber + '\nwith the amount of: $' + amount + '\nYour new balance is: $' + newBalance;
    
    return withdraw;
    
}


//getbalance method
function getBalance(accountNumber){
    var balance;
    balance = 'Your balance for account number ' + accountNumber + ' is: $' + account.balance;
    return balance;
}
console.log(account);

console.log(deposit(1234, 500));
console.log('\n');
console.log(withdraw(1234, 51));
console.log('\n');
console.log(getBalance(1234));

console.log(account);
