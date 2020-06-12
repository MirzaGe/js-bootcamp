let myAccount = {
    name:'Shaharyar Baig',
    expenses:150,
    income:0
}

let addExpense = function (account,amount) {
    account.expenses = account.expenses + amount
console.log(account)
}

addExpense(myAccount, 137)
console.log(myAccount)
    
