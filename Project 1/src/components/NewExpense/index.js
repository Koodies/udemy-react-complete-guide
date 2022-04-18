import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './index.css'

function NewExpense(props) {
    const [display, setDisplay] = useState(false)
    const saveExpenseHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        props.addExpense(newExpense)
    }

    const toggleExpenseForm = () => {
        setDisplay(prevDisplay => {
            return !prevDisplay
        })
    }

    return (
        <div className='new-expense'>
            {!display && <button onClick={toggleExpenseForm}>Add New Expense</button>}
            {display && <ExpenseForm onCancel={toggleExpenseForm} saveExpense={saveExpenseHandler}/>}
        </div>
    )
}

export default NewExpense