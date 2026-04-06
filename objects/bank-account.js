


const savingAccount={
    balance:1000,
    interestRatePercent:1,
    deposit:function addMoney(amount){
        if(amount > 0){
            savingAccount.balance +=amount;
        }
    },
    withdraw:function removeMoney(amount){
        var varifyBalance =savingAccount.balance - amount
        if (amount > 0 && varifyBalance>=0) {
          savingAccount.balance -= amount;
        }
    },
    printAccountSummary:function(){
        return `Welcome!\nYour balance is currently $${savingAccount.balance} and your interest rate is ${savingAccount.interestRatePercent}%.`
    }
};
console.log(savingAccount.printAccountSummary());