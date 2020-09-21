// Classes
class Budget {
    constructor(budget){
        this.budget = Number( budget);
        this.budgetLeft = this.budget
    }
}

class HTML {
    // Insert the budget when user submit it
    insertBudget(amount){
        console.log(amount)
        // insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    //Display error msg
    printMessage(message, className){
        const messageBox = document.createElement('div');
        messageBox.classList.add('alert', className)
        messageBox.appendChild(document.createTextNode(message))

        document.querySelector('.content').insertBefore(messageBox, expenseForm);

        setTimeout(() => {
                document.querySelector('.alert').remove()
                // expenseForm.reset()

            }, 3000)  
    }

    addExpenseList (expense, amount){
        const expenseList = document.querySelector('#expenses')
        const list = document.createElement('p');
          list.className = 'item';
        
        // console.log(expense, amount)


        list.innerHTML =`
            ${expense}
            <span>$ ${amount}</span>
        `;

        expenseList.appendChild(list)
    }

}

// Variables
const expenseForm = document.querySelector('#expense-form'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left')


let budget, userBudget;

const  html = new HTML()

// EventListeners
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', function(){

        userBudget = prompt('What\'s your budget for this week? ');

        if(userBudget === null || userBudget === '' ||userBudget === '0' ){
            window.location.reload();
        }else{
            budget = new Budget(userBudget)

            html.insertBudget(budget.budget)
        }

        
    })

    expenseForm.addEventListener('submit', function(e){
        e.preventDefault();

        const expenseValue = document.querySelector('#expense').value;
        const amountValue = document.querySelector('#amount').value;

        if(expenseValue === '' || amountValue === ''){
            html.printMessage('All fields are mandatory',  'alert')
        }
        else{
            html.addExpenseList(expenseValue, amountValue)
        }

    })



}
