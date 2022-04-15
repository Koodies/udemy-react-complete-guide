import './index.css'
import { useState } from 'react'

function ExpenseForm() {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler} />
                </div>
                <button className='new-expense__button'>Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm