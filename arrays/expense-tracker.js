const account = {
    name: 'shaharyar',
    expenses:[],
    income: [],
    addExpense: function (description,amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description,amount){
        this.income.push({
          description: description,
          amount:  amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance =0

        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses +expense.amount
        })
        return `${this.name} has $${totalExpenses} in expenses.`

    }
}

 account.addExpense('Rent',950)
 account.addExpense('Coffe',2)
 account.addIncome('job',1000)
 console.log(account.getAccountSummary())