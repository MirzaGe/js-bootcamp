const account = {
    name: 'shaharyar',
    expenses:[],
    addExpense: function (description,amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses +expense.amount

        })
        return `${this.name} has $${totalExpenses} in expenses.`

    }
}

 account.addExpense('Rent',950)
 account.addExpense('Coffe',2)
 console.log(account.getAccountSummary())