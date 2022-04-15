import ExpenseForm from './ExpenseForm'
import './index.css'

function NewExpense(props) {
    const saveExpenseHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        props.addExpense(newExpense)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm saveExpense={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense